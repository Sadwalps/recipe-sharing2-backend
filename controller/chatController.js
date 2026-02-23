const chats = require('../models/chatModel')

//controller for add chats
exports.addChatController = async (req, res) => {
    console.log(`Inside add chat controller`);

    const { username, chat } = req.body
    console.log(username, chat);

    const userId = req.payload
    console.log(userId);

    try {
        const newChat = new chats({
            username, chat, userId
        })
        await newChat.save()
        res.status(200).json(newChat)
    } catch (error) {
        res.status(401).json(error)
    }

} 
