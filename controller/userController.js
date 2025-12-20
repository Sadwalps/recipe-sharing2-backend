//import 
const users = require('../models/userModel')

exports.registerController = async (req, res) => {
    console.log(`Inside register controller`);

    const { username, email, password } = req.body
    console.log(username, email, password);

    try {
        const existingUser = await users.findOne({ email })
        if (existingUser) {
            res.status(406).json(`User already exists`)
        } else {
            const newUser = new users({ username, email, password })
            await newUser.save()
            res.status(200).json(newUser)
        }
    } catch (error) {
        res.status(401).json(error)
    }

}