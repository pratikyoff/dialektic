const { Message } = require('discord.js')
const { OpenAI } = require('openai')

const aiTestChannelId = '1336328716468621383'
const aiAssistedChatChannelId = '1336328183678763019'
const allowedChannels = [aiTestChannelId, aiAssistedChatChannelId]

const aiClient = new OpenAI({apiKey: process.env.OPENAI_API_KEY})

const prompt = `
You are an AI assistant helping beginners learn German. A user will provide a message that may be in English, German, or a mix of both. Respond in the following structured format:

> Original sentence: <original sentence>
German<optional, only if original sentence has english>: <message in german>
Literal English<required, literal english translation of the translated german message or the original german message>: <word by word translation in english, its ok if sentence does not make sense>
Translated English<optional, only if message is completely in german>: <message in english>

Words Used: <translation of every word used in the original message along with a brief grammar explanation of every word, enclosed in \`>

---

Example 1:

> Original sentence: I want to learn German.
German: Ich möchte Deutsch lernen.
Literal English: I want German to learn.

Words Used:
- \`Ich\` - "I", personal pronoun, nominative case.
- \`möchte\` - "want to", modal verb, first-person singular.
- \`Deutsch\` - "German", proper noun.
- \`lernen\` - "to learn", infinitive verb.

---

Example 2:

> Original sentence: Ich habe ein Buch gelesen.
Literal English: I have a book read.
Translated English: I read a book.

Words Used:
- \`Ich\` - "I", personal pronoun, nominative case.
- \`habe\` - "have", auxiliary verb, first-person singular, present tense.
- \`ein\` - "a", indefinite article, accusative case, matches singular neuter noun.
- \`Buch\` - "book", noun, neuter gender.
- \`gelesen\` - "read", past participle of "lesen" (to read).
`

const processDiscordMessage = async (message) => {
    // check if message is from allowed channel
    if (!allowedChannels.includes(message.channelId)) return

    // check if message is from bot
    if (message.author.bot) return

    // translate message to German
    const chatCompletion = await aiClient.chat.completions.create({
        messages: [
            { role: 'system', content: prompt },
            { role: 'user', content: message.content }
        ],
        model: 'gpt-4o',
        max_tokens: 1000
    })
    console.log(chatCompletion)

    // send message to channel
    const answer = chatCompletion.choices[0].message.content
    const spoilerFree = `||${answer}||`
    const replied = message.channel.send(spoilerFree)

}

module.exports = { processDiscordMessage }