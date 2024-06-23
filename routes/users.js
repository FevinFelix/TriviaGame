const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()

//routes

router.get('/', (req, res) => {
    res.send('Hello NODE API')
})

router.get('/blog', (req, res) => {
    res.send("Hello Blog!")
})

mongoose
.connect(process.env.MONGO_TRIVIA_STRING)
.then(() => {
    console.log("connected to mongo db")
}).catch((error) => {
    console.log(error)
})

module.exports = router;