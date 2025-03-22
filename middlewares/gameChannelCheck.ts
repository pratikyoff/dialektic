import { Client, CommandInteraction } from 'discord.js'
import { CHANNEL_ID } from '../constants/channelIds.ts'

const allowedGameChannels = [
    CHANNEL_ID.AI_TEST,
    CHANNEL_ID.BOT_GAMES
] as string[]

// eslint-disable-next-line no-unused-vars
const checkGameChannel = (commandExecutorFn: (interaction: CommandInteraction, client: Client) => Promise<void>) => {
    return async (interaction: CommandInteraction, client: Client) => {
        const { channelId } = interaction

        if (!allowedGameChannels.includes(channelId)) {
            await interaction.reply(`This command can only be used in <#${CHANNEL_ID.BOT_GAMES}>.`)
            return
        }

        await commandExecutorFn(interaction, client)
    }
}

export { checkGameChannel }