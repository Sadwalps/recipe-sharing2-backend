const chats = require('../models/chatModel')

//controller for add chats
exports.addChatController = async (req, res) => {
    console.log(`Inside add chat controller`);

    const { username, chat } = req.body
    console.log(username, chat);

    const userId = req.payload
    console.log(userId);

    try {

        const existingChats = await chats.findOne({ username, chat })
        if (existingChats) {
            res.status(406).json(`Chat already exists`)
        } else {
            const newChat = new chats({
                username, chat, userId
            })
            await newChat.save()
            res.status(200).json(newChat)
        }
    } catch (error) {
        res.status(401).json(error)
    }
}

//controller for get user chats
exports.getUserChatController = async (req, res) => {
    console.log(`Inside user chats controller`);

    const userId = req.payload
    console.log(userId);

    try {
        const userChats = await chats.find({ userId })
        res.status(200).json(userChats)
    } catch (error) {
        res.status(406).json(error)
    }
}
