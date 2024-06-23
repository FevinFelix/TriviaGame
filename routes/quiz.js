const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()

//routes

router.get('/', (req, res) => {
    res.send("You've reached the quiz side!")
})

router.get('/question', (req, res) => {
    res.send("What's the tallest building in the world?")
})

module.exports = router;