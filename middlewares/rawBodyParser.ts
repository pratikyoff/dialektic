// const { Router } = require('express')

// const rawBodyParser = async (req, res, next) => {
//     try {
//         const data = await new Promise((resolve, reject) => {
//             let body = ''
//             req.on('data', chunk => {
//                 body += chunk
//             })
//             req.on('end', () => {
//                 req.rawBodyString = body

//                 try {
//                     // set req.body to JSON parsed body
//                     req.body = JSON.parse(body)
//                 } catch (error) {
//                     // JSON parsing failed, do not modify req.body
//                 }

//                 resolve(body)
//             })
//             req.on('error', err => reject(err))
//         })
//         next()
//     } catch (error) {
//         next(error)
//     }
// }

// module.exports = { rawBodyParser }