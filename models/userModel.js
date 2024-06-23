const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, "Please enter a username"]
        },
        password: {
            type: String,
            required: [true, "Please enter a password"]
        },
        questionsCorrect: {
            type: Number,
            required: true,
            default: 0
        }
    },
    {
        timestamps: true
    }
)

const User = mongoose.model('User', userSchema)

module.exports = User;