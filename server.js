const { Client, Events, GatewayIntentBits, Collection } = require('discord.js')
const { processDiscordMessage } = require('./controllers/discordMessages')
const satzdoctor = require('./commands/satzdoktor')

const client = new Client({ intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
] })

client.commands = new Collection()
client.commands.set(satzdoctor.data.name, satzdoctor)

client.once(Events.ClientReady, readyClient => {
    console.log(`Logged in as ${readyClient.user.tag}`)
})

client.on(Events.MessageCreate, processDiscordMessage)

client.on(Events.InteractionCreate, interaction => {
	console.log(interaction)
})

client.login(process.env.DISCORD_BOT_TOKEN)