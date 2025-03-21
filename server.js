const { Client, Events, GatewayIntentBits } = require('discord.js')
const { processDiscordMessage } = require('./controllers/discordMessages')
const { registerCommands } = require('./commands/register')

const client = new Client({ intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
]})

client.once(Events.ClientReady, readyClient => {
    console.log(`Logged in as ${readyClient.user.tag}`)
})

client.on(Events.MessageCreate, processDiscordMessage)

client.login(process.env.DISCORD_BOT_TOKEN)

registerCommands(client)