const { Router } = require('express')

const discordRouter = Router()

discordRouter.post('/', (req, res) => {
    res.status(204)
    res.set('Content-Type', 'application/json')
    res.end()
})

module.exports = { discordRouter }