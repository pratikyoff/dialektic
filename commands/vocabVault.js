const { COMMAND_NAMES } = require("../constants/commandNames")
const { LANGUAGE_CODE } = require("../constants/languageCodes")
const { vocabWords } = require("../store/vocabWords")
const { sleepForMs } = require("../util/time")

const loopTimeSec = 45

let memory = []
let scorePerUser = {}
let gameInterval
let messageCollector
let currentGameChannelId
let currentGameLoopCounter = 0

const judgeLatestLoop = async (channel, client) => {
    const lastWordIndex = memory.length - 1
    const lastWord = memory[lastWordIndex]
    console.log('Judging latest loop, last word:', lastWord)

    const collected = messageCollector.collected

    if (collected.size === 0) {
        console.log('No messages collected, ending game.')
        // end the game
        await stopGameInternal(channel, client)
        return true
    }

    const lastMessagePerUser = {}
    for (const collectedMessage of collected.values()) {
        const userId = collectedMessage.author.id
        lastMessagePerUser[userId] = collectedMessage
    }

    const correctUserIds = []
    for (const userId of Object.keys(lastMessagePerUser)) {
        const userMessage = lastMessagePerUser[userId]
        const userAnswer = userMessage.content.trim()

        if (userAnswer.toLowerCase() === lastWord[lastWord.translateTo].toLowerCase()) {
            correctUserIds.push(userId)

            if (!scorePerUser[userId]) {
                scorePerUser[userId] = 0
            }
            scorePerUser[userId] += 1
            console.log(`User ${userId} answered correctly. Current score:`, scorePerUser[userId])
        }
    }

    if (correctUserIds.length === 0) {
        await channel.send(`No one answered correctly. The correct answer was \`${lastWord[lastWord.translateTo]}\``)
    } else if (correctUserIds.length === 1) {
        await channel.send(`The correct answer was \`${lastWord[lastWord.translateTo]}\`. <@${correctUserIds[0]}> answered correctly!`)
    } else {
        const users = correctUserIds.map(userId => `<@${userId}>`).join(', ')
        await channel.send(`The correct answer was \`${lastWord[lastWord.translateTo]}\`. ${users} answered correctly!`)
    }

    // clear the message collector
    if (messageCollector) {
        console.log('Stopping and clearing message collector.')
        messageCollector.stop()
        messageCollector = null
    }
}   

const generateNextWord = async (channel, client) => {
    let allowedWords = vocabWords.filter(word => !memory.some(memWord => memWord.id === word.id))
    if (allowedWords.length === 0) {
        // reset memory except the last word
        memory.splice(0, memory.length - 1)

        allowedWords = vocabWords.filter(word => !memory.some(memWord => memWord.id === word.id))
    }

    const randomIndex = Math.floor(Math.random() * allowedWords.length)
    const randomWord = allowedWords[randomIndex]

    const translateFrom = Math.random() < 0.5 ? 'de' : 'en'
    const translateTo = translateFrom === 'de' ? 'en' : 'de'

    const prompt = `Translate the following word from ${LANGUAGE_CODE[translateFrom]} to ${LANGUAGE_CODE[translateTo]}: \`${randomWord[translateFrom]}\``
    await channel.send(prompt)
    console.log('Prompt for next word sent:', prompt)

    memory.push({
        ...randomWord,
        translateTo
    })
    if (memory.length > 100) {
        memory.shift()
    }

    // create message collector. the extra second is to ensure that the message collector is active for the entire loop time
    messageCollector = channel.createMessageCollector({ time: (loopTimeSec + 1) * 1000 })
    console.log('Message collector created for', loopTimeSec + 1, 'seconds')
}

const startVocabVault = async (interaction, client) => {
    try {
        await interaction.reply(`Starting vocab vault game shortly! You will be given a word to translate every 45 seconds. Type the translation in the chat to continue playing. Type \`${COMMAND_NAMES.STOP_VOCAB_VAULT}\` to stop the game.`)
        const channel = await client.channels.fetch(interaction.channelId)

        // sleep for sometime so that user can read the message
        await sleepForMs(10000)
        console.log('Initial sleep completed, starting game loop.')

        currentGameChannelId = interaction.channelId
        gameInterval = setInterval(async () => {
            console.log('Game interval triggered, loop counter:', currentGameLoopCounter)
            if (currentGameLoopCounter > 0) {
                const shouldStop = await judgeLatestLoop(channel, client)
                if (shouldStop) return
            }
            await generateNextWord(channel, client)

            currentGameLoopCounter += 1
        }, loopTimeSec * 1000)
    } catch (error) {
        console.error('Error starting Vocab Vault:', error)
        await interaction.followUp('An error occurred while starting the game. Please try again.')
    }
}

const judgeTotalGame = async () => {
    const results = []
    if (Object.keys(scorePerUser).length === 0) {
        console.log('No scores to display at game end.')
        return 'No scores to display.'
    }

    for (const userId of Object.keys(scorePerUser)) {
        results.push(`<@${userId}>: ${scorePerUser[userId]}`)
    }

    const maxScore = Math.max(...Object.values(scorePerUser))
    const winners = Object.keys(scorePerUser).filter(userId => scorePerUser[userId] === maxScore)

    if (winners.length === 1) {
        results.push(`The winner is <@${winners[0]}> with ${maxScore} points!`)
    } else {
        const users = winners.map(userId => `<@${userId}>`).join(', ')
        results.push(`The winners are ${users} with ${maxScore} points!`)
    }

    return results.join('\n')
}

const stopGameInternal = async (channel, client) => {
    clearInterval(gameInterval)
    console.log('Game interval cleared, stopping game.')

    const results = await judgeTotalGame()
    await channel.send(`Game stopped. Here are the scores:\n${results}`)

    // reset the game
    scorePerUser = {}
    currentGameChannelId = null
    currentGameLoopCounter = 0
    if (messageCollector) {
        console.log('Stopping and clearing message collector.')
        messageCollector.stop()
        messageCollector = null
    }
}

const stopVocabVault = async (interaction, client) => {
    if (!currentGameChannelId) {
        await interaction.reply('No game in progress.')
        return
    }
    if (interaction.channelId !== currentGameChannelId) {
        await interaction.reply(`A game is ongoing in channel <#${currentGameChannelId}>. You can only stop the game in that channel.`)
        return
    }
    const channel = await client.channels.fetch(interaction.channelId)
    await stopGameInternal(channel, client)
}

module.exports = {
    startVocabVault,
    stopVocabVault
}