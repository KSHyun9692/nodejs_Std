const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://qbvmvm:Tmdgus0427%40%40@cluster0.0flrqjv.mongodb.net/').then(() => console.log('MongoDB Connected.....'))
    .catch(err => console.log(err))

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))