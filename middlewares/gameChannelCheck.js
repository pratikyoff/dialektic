const { CHANNEL_ID } = require('../constants/channelIds')

const allowedGameChannels = [
    CHANNEL_ID.AI_TEST,
    CHANNEL_ID.BOT_GAMES
]

const checkGameChannel = (commandExecutorFn) => {
    return async (interaction, client) => {
        const { channelId } = interaction

        if (!allowedGameChannels.includes(channelId)) {
            await interaction.reply(`This command can only be used in <#${CHANNEL_ID.BOT_GAMES}>.`)
            return
        }

        await commandExecutorFn(interaction, client)
    }
}

module.exports = {
    checkGameChannel
}