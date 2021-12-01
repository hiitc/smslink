const express = require('express')
const app = express()
const crypto = require('crypto')
const ENCRYPTION_KEY = 'aow48et9ua9(346ihasdYSDGl3498sul'
const IV_LENGTH = 16

app.get('/', (req, res) => {
    res.send('Welcome, Node Home!')
})

app.get('/enc', (req, res) => {
    const iv = crypto.randomBytes(IV_LENGTH)
    const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(ENCRYPTION_KEY), iv)
    const encrypted = cipher.update(req.query.enc_text)

    console.log(iv.toString('hex') + ':' + Buffer.concat([encrypted, cipher.final()]).toString('hex'))
    res.send(iv.toString('hex') + ':' + Buffer.concat([encrypted, cipher.final()]).toString('hex'))
})

function decrypt(text) {
    const textParts = text.split(':')
    const iv = Buffer.from(textParts.shift(), 'hex')
    const encryptedText = Buffer.from(textParts.join(':'), 'hex')
    const decipher = crypto.createDecipheriv('aes-256-cbc',Buffer.from(ENCRYPTION_KEY),iv)
    const decrypted = decipher.update(encryptedText)
  
    return Buffer.concat([decrypted, decipher.final()]).toString()
  }

app.listen(3000, () => {
    console.log('Node Server Started!!!')
})