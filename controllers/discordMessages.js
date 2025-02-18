const { Message } = require('discord.js')
const { OpenAI } = require('openai')
const { sleepForMs } = require('../util/time')

const aiTestChannelId = '1336328716468621383'
const aiAssistedChatChannelId = '1336328183678763019'
const fwfAiAssistedChatChannelId = '1338306843075805185'
const allowedChannels = [aiTestChannelId, aiAssistedChatChannelId, fwfAiAssistedChatChannelId]

const aiClient = new OpenAI({apiKey: process.env.OPENAI_API_KEY})
const maxResponseLength = 2000

const prompt = `
You are an AI assistant helping beginners learn German.
A user will provide a message that may be in English, German, or a mix of both.
If your response is going above 2000 characters, reduce the number of "Words Used" points so that the response fits within 2000 characters.
Respond in the following structured format:

> Original sentence: <original sentence>
German<optional, only if original sentence has english>: <message in german>
Corrected German<optional, only if original sentence has german and is incorrect>: <corrected message in german>
Literal English<required, literal english translation of the translated,original or correct german message>: <word by word translation in english, its ok if sentence does not make sense>
Translated English<optional, only if message is completely in german>: <message in english>

Words Used: <translation of every word used in the original message along with a brief grammar explanation of every word, enclosed in \`>

---

Example 1:

> Original sentence: I want to learn German.
German: \`Ich möchte Deutsch lernen.\`
Literal English: I want German to learn.

Words Used:
- \`Ich\` - "I", personal pronoun, nominative case.
- \`möchte\` - "want to", modal verb, first-person singular.
- \`Deutsch\` - "German", proper noun.
- \`lernen\` - "to learn", infinitive verb.

---

Example 2:

> Original sentence: Ich habe ein Buch gelesen.
Literal English: I have a book read.
Translated English: \`I read a book.\`

Words Used:
- \`Ich\` - "I", personal pronoun, nominative case.
- \`habe\` - "have", auxiliary verb, first-person singular, present tense.
- \`ein\` - "a", indefinite article, accusative case, matches singular neuter noun.
- \`Buch\` - "book", noun, neuter gender.
- \`gelesen\` - "read", past participle of "lesen" (to read).

---

Example 3:

> Original sentence: Ich lernen Deutsch für zwei monets.
German: \`Ich lerne Deutsch seit zwei Monaten.\`
Literal English: I learn German since two months.
Translated English: \`I have been learning German for two months.\`

Words Used:
- \`Ich\` - "I", personal pronoun, nominative case.
- \`lerne\` - "learn", first-person singular form of "lernen" (to learn).
- \`Deutsch\` - "German", proper noun.
- \`seit\` - "since", preposition indicating a starting point in the past.
- \`zwei\` - "two", number (plural form of "two").
- \`Monaten\` - "months", dative plural form of "Monat" (month), used with "seit" to indicate a duration.
`

const spoilerTag = '||'

const sendMessageWithSpoiler = async (channel, content) => {
    const spoilerContent = `${spoilerTag}${content}${spoilerTag}`
    try {
        await channel.send(spoilerContent)
    } catch (error) {
        console.error(error)
    }
}

const processDiscordMessage = async (message) => {
    // check if message is from allowed channel
    if (!allowedChannels.includes(message.channelId)) return

    // check if message is from bot
    if (message.author.bot) return

    // translate message to German
    const chatCompletion = await aiClient.chat.completions.create({
        messages: [
            { role: 'system', content: prompt },
            { role: 'user', content: message.content }
        ],
        model: 'gpt-4o',
        max_tokens: 1000
    })
    console.log(JSON.stringify(chatCompletion))

    // send message to channel
    const answer = chatCompletion.choices[0].message.content
    const spoilerFree = `${spoilerTag}${answer}${spoilerTag}`

    if (spoilerFree.length <= maxResponseLength) {
        await sendMessageWithSpoiler(message.channel, answer)
        return
    }

    // if response is too long, split it into multiple messages
    const splitAnswer = answer.split('\n')
    let currentMessage = ''
    for (const line of splitAnswer) {
        if (currentMessage.length + '\n'.length + line.length + (2 * spoilerTag.length) > maxResponseLength) {
            await sendMessageWithSpoiler(message.channel, currentMessage)
            
            // sleep for 1 second to prevent rate limiting
            await sleepForMs(1000)

            currentMessage = ''
        }
        currentMessage += line + '\n'
    }
    if (currentMessage.length > 0) await sendMessageWithSpoiler(message.channel, currentMessage)
}

module.exports = { processDiscordMessage }