//import mongoose
const mongoose = require('mongoose')

const chatSchema = new mongoose.Schema({
    username: {
        required: true,
        type: String
    },
    chat: {
        required: true,
        type: String
    }, userId: {
        required: true,
        type: String
    }
})

const chats = mongoose.model("chats", chatSchema)
module.exports = chats