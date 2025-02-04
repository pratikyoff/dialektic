const fs = require('fs')
const express = require('express')
const logger = require('pino-http')

// routers
const { discordRouter } = require('./routes/discord')
const { discordVerificationRouter } = require('./middlewares/discordVerification')

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

app.use(express.json())

// declare routes
app.get('/', (req, res) => {
    res.send('Server is running')
})

app.use('/discord', discordVerificationRouter, discordRouter)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})