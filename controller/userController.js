//import 
const users = require('../models/userModel')
const jwt = require('jsonwebtoken')

//controller for register
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


//controller for login
exports.loginController = async (req, res) => {
    console.log(`Inside login controller`);
    const { email, password } = req.body
    console.log(email, password);

    try {
        const existingUser = await users.findOne({ email, password })
        if (existingUser) {
            const token = jwt.sign({ userId: existingUser._id }, "secretkey")
            res.status(200).json({ existingUser, token })
        } else {
            res.status(406).json(`Incorrect email or password`)
        }

    } catch (error) {
        res.status(401).json(error)
    }


}