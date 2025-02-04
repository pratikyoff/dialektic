const { Router } = require('express')

const discordRouter = Router()

// Discord PING
// -H "Content-Type: application/json" -d '{"type": 0}'
discordRouter.post('/', (req, res) => {
    if (req.body.type === 0) res.status(204).json()
})

module.exports = { discordRouter }