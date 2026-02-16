//import mongoose
const mongoose = require('mongoose')

const chatSchema = new mongoose.Schema({
    username: {
        required: true,
        type: String
    },
    chats: {
        required: true,
        type: String
    }
})

const chats = mongoose.model("chats", chatSchema)
module.exports = chats