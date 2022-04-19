const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

// mongoose.connect('mongodb://localhost/firstmongo')
const app = express()
app.use(bodyParser.json())

app.post('/whatsapp-msg', (req, res) => {
    
    if(req.body.token !== '12345'){
        res.status(401).send('Unauthorized')
    }
    console.log(req.body)
    res.send('ok')
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})
