const { Router } = require('express')
const nacl = require('tweetnacl')

const APP_PUBLIC_KEY = process.env.APP_PUBLIC_KEY

const discordVerificationRouter = Router()

discordVerificationRouter.use((req, res, next) => {
    try {
        const signature = req.get('X-Signature-Ed25519')
        const timestamp = req.get('X-Signature-Timestamp')
        const body = req.rawBodyString

        const isVerified = nacl.sign.detached.verify(
            Buffer.from(timestamp + body),
            Buffer.from(signature, 'hex'),
            Buffer.from(APP_PUBLIC_KEY, 'hex')
        )

        if (!isVerified) {
            return res.status(401).end('invalid request signature')
        }
        next()
    } catch (error) {
        return res.status(401).end('invalid request signature')
    }
})

module.exports = { discordVerificationRouter }