const express = require('express')
const mongoose = require('mongoose')
const app = express()

//routes

app.get('/', (req, res) => {
    res.send('Hello NODE API')
})

app.get('/blog', (req, res) => {
    res.send("Hello Blog!")
})

mongoose
.connect(process.env.MONGO_TRIVIA_STRING)
.then(() => {
    app.listen(3000, () => {
        console.log(`Node API app is running on port 3000`)
    })
    console.log("connected to mongo db")
}).catch((error) => {
    console.log(error)
})