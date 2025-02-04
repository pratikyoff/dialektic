const fs = require('fs')
const express = require('express')
const logger = require('pino-http')

// routers
const { discordRouter } = require('./routes/discord')
const { discordVerificationRouter } = require('./middlewares/discordVerification')
const { rawBodyParser } = require('./middlewares/rawBodyParser')

const app = express()

const { PORT } = process.env
if (!PORT) {
    throw new Error('PORT is not defined')
}

// create ./logs directory if not exists
if (!fs.existsSync('./logs')) {
    fs.mkdirSync('./logs')
}
// create ./logs/output.log file if not exists
if (!fs.existsSync('./logs/output.log')) {
    fs.writeFileSync('./logs/output.log', '')
}

app.use(logger({
    transport: {
        targets: [
            { target: 'pino-pretty', options: { colorize: true } },
            { target: 'pino/file', options: { destination: './logs/output.log' } }
        ]
    }
}))
app.use(rawBodyParser)
// app.use(express.json())

// declare routes
app.get('/', (req, res) => {
    res.send('Server is running')
})

app.use('/discord', discordVerificationRouter, discordRouter)

// terms of service
app.get('/terms', (req, res) => {
    res.send('<html><body><h1>Terms of Service</h1><p>By using this service, you agree to the terms of service.</p></body></html>')
})
// privacy policy
app.get('/privacy', (req, res) => {
    res.send('<html><body><h1>Privacy Policy</h1><p>By using this service, you agree to the privacy policy.</p></body></html>')
})
// user/install
app.get('/user/install', (req, res) => {
    res.send('<html><body><h1>Install</h1><p>App cannot be installed for a user.</p></body></html>')
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})


// discord.js setup
const { Client, Events, GatewayIntentBits } = require('discord.js')
const { processDiscordMessage } = require('./controllers/discordMessages')
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