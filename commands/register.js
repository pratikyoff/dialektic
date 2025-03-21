const { REST, Routes } = require('discord.js')
const { checkGameChannel } = require('../middlewares/gameChannelCheck')
const { startVocabVault, stopVocabVault } = require('./vocabVault')

const TOKEN = process.env.DISCORD_BOT_TOKEN
const CLIENT_ID = process.env.DISCORD_CLIENT_ID

const COMMAND_NAMES = {
    START_VOCAB_VAULT: 'start-vocab-vault',
    STOP_VOCAB_VAULT: 'stop-vocab-vault'
}

const commandsInfo = [
    {
        name: COMMAND_NAMES.START_VOCAB_VAULT,
        description: 'Starts a game where you have to translate a word from German to English or vice versa.'
    },
    {
        name: COMMAND_NAMES.STOP_VOCAB_VAULT,
        description: 'Stops the game where you have to translate a word from German to English or vice versa.'
    }
]

const commandToFunctions = {
    [COMMAND_NAMES.START_VOCAB_VAULT]: checkGameChannel(startVocabVault),
    [COMMAND_NAMES.STOP_VOCAB_VAULT]: checkGameChannel(stopVocabVault)
}

const registerCommands = async (client) => {
    const rest = new REST({ version: '10' }).setToken(TOKEN)

    try {
        console.log('Started refreshing application (/) commands.')
        await rest.put(Routes.applicationCommands(CLIENT_ID), { body: commandsInfo })
        console.log('Successfully reloaded application (/) commands.')
    } catch (error) {
      console.error(error)
    }

    client.on('interactionCreate', async (interaction) => {
        if (!interaction.isChatInputCommand()) return

        const { commandName } = interaction

        if (!commandToFunctions[commandName]) {
            await interaction.reply('Command not found.')
            return
        }

        await commandToFunctions[commandName](interaction, client)
    })
}

module.exports = {
    registerCommands
}