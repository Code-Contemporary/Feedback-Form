const express = require('express')
const path = require('path')
const multer = require('multer')
const upload = multer()

const app = express()

app.use('/public', express.static('public'))
app.use(upload.any())


app.listen(6969)

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
})

app.post('/', (req, res) => {
    console.log(req.body)
    res.sendStatus(200)
})