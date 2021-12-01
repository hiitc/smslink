const express = require('express')
const crypto = require('crypto')
const fs = require('fs')
const app = express()
const ENCRYPTION_KEY = 'aow48et9ua9(346ihasdYSDGl3498sul'
const IV_LENGTH = 16

app.get('/', (req, res) => {
    res.send('Welcome, Node Home!')
})

app.get('/enc', (req, res) => {
    var iv = crypto.randomBytes(IV_LENGTH)
    const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(ENCRYPTION_KEY), iv)
    const encrypted = cipher.update(req.query.enc_text)

    var dec_text = iv.toString('hex') + ':' + Buffer.concat([encrypted, cipher.final()]).toString('hex')

    console.log(dec_text)
    res.send(dec_text)
})

app.get('/dec', (req, res) => {
    var parm = req.query.dec_text
    var textParts = parm.split(':')
    var iv = Buffer.from(textParts.shift(), 'hex')
    const encryptedText = Buffer.from(textParts.join(':'), 'hex')
    const decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(ENCRYPTION_KEY), iv)
    var decrypted = decipher.update(encryptedText)
    decrypted = Buffer.concat([decrypted, decipher.final()]).toString()

    console.log(decrypted)
    var data = fs.readFileSync(decrypted);
    console.log(data)
    res.writeHead("200", {"Content-Type": "text/html; charset=EUC-KR"});
    //res.write('<iframe src="efs/' + decrypted + '" style="width:100%; height:1500px; border:1px solid #00c;"></iframe>');
    res.write(data)
    res.end()
})

function getParam(sname) {
    var params = location.search.substr(location.search.indexOf("?") + 1);
    var sval = "";
    
    params = params.split("&");
    for (var i = 0; i < params.length; i++) {
        temp = params[i].split("=");
        if ([temp[0]] == sname) { sval = temp[1]; }
    }
    return sval;
}


app.listen(3000, () => {
    console.log('Node Server Started!!!')
})