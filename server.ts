import 'dotenv/config'

import { Client, Events, GatewayIntentBits } from 'discord.js'
import { processDiscordMessage } from './controllers/discordMessages.ts'
import { registerCommands } from './commands/register.ts'

const client = new Client({ intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
] })

client.once(Events.ClientReady, readyClient => {
    console.log(`Logged in as ${readyClient.user.tag}`)
})

client.on(Events.MessageCreate, processDiscordMessage)

client.login(process.env.DISCORD_BOT_TOKEN)

registerCommands(client)