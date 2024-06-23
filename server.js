const express = require('express')
const app = express()
const port = 3000

// import individual routes
const userRoutes = require('./routes/users')
const quizRoutes = require('./routes/quiz')

// middleware
app.use(express.json());

// use individual routes
app.use('/users', userRoutes)
app.use('/quiz', quizRoutes)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})