const express = require('express')
const mongoose = require('mongoose')
const User = require('../models/userModel.js')
const router = express.Router()

//routes

// get all available users
router.get('/', async(req, res) => {
    try {
        const users = await User.find({})
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// add a user
router.post('/add', async(req, res) => {
    try {
        const user = await User.create(req.body)
        res.status(200).json(user)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
})

// get a user by id
router.get('/:id', async(req, res) => {
    try {
        const {id} = req.params
        const user = await User.findById(id)
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// update a user by id
router.put('/update/:id', async(req, res) => {
    try {
        const {id} = req.params
        const user = await User.findByIdAndUpdate(id, req.body)
        if (!user) {
            return res.status(404).json({message: `Cannot find any users with ID ${id}`})
        }
        const updatedUser = await User.findById(id)
        res.status(200).json(updatedUser)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// delete a user by id
router.delete('/delete/:id', async(req, res) => {
    try {
        const {id} = req.params
        const user = await User.findByIdAndDelete(id)
        if (!user) {
            return res.status(404).json({message: `Cannot find any users with ID ${id}`})
        }
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

mongoose
.connect(process.env.MONGO_TRIVIA_STRING)
.then(() => {
    console.log("connected to mongo db")
}).catch((error) => {
    console.log(error)
})

module.exports = router;