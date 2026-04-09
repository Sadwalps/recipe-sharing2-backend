//import model
const jwt = require('jsonwebtoken');
const admins = require('../models/adminModel')
const usersd = require(`../models/userModel`)
const recipes = require('../models/recipeModel')
const chatsd = require('../models/chatModel')

//controller for adminRegister
exports.adminRegisterController = async (req, res) => {
    console.log(`Inside admin register controller`);

    const { adminname, email, password } = req.body
    console.log(adminname, email, password);

    try {
        const existingAdmin = await admins.findOne({ email })
        if (existingAdmin) {
            res.status(406).json(`Admin already exists`)
        } else {
            const newAdmin = await new admins({
                adminname, email, password
            })
            await newAdmin.save()
            res.status(200).json(newAdmin)
        }
    } catch (error) {
        res.status(401).json(error)
    }
}

//controller for adminLogin

exports.adminLoginController = async (req, res) => {
    console.log(`Inside admin login controller`);

    const { email, password } = req.body
    console.log(email, password);


    try {
        const existingAdmin = await admins.findOne({ email, password })
        if (existingAdmin) {
            const token = jwt.sign({ userId: existingAdmin._id }, "secretkey")
            res.status(200).json({ existingAdmin, token })
        } else {
            res.status(406).json(`Incorrect email or password`)
        }
    } catch (error) {
        res.status(401).json(error)
    }
}

//controller for get users details
exports.getUsersDetailsController = async (req, res) => {
    console.log(`Inside get users details controller`);

    try {
        const allUsersdetails = await usersd.find()
        res.status(200).json(allUsersdetails)
    } catch (error) {
        res.status(401).json(error)
    }

}

//controller for delete user
exports.deleteUserController = async (req, res) => {
    console.log(`Inside delete user controller`);
    const { id } = req.params
    try {
        await usersd.findByIdAndDelete({ _id: id })
        res.status(200).json(`User successfully deleted`)
    } catch (error) {
        res.status(401).json(error)
    }
}

//controller to get all recipes
exports.getAllRecipesController = async (req, res) => {
    console.log(`Inside get all recipes controller`);

    try {
        const allRecipes = await recipes.find()
        res.status(200).json(allRecipes)
    } catch (error) {
        res.status(401).json(error)
    }
}

//controller for delete recipes 
exports.deleteRecipeController = async (req, res) => {
    console.log(`Inside delete recipe controller `);
    const { id } = req.params
    try {
        await recipes.findByIdAndDelete({ _id: id })
        res.status(200).json(`Recipe successfully deleted`)
    } catch (error) {
        res.status(401).json(error)
    }
}

//controller for get single user's recipe
exports.getSingleUserRecipeController = async (req, res) => {
    console.log(`Inside get single user recipe controller`);
    const { userId } = req.payload
    console.log(userId);
    

    try {
        const usersRecipes = await recipes.find({ userId })
        res.status(200).json(usersRecipes)
    } catch (error) {
        res.status(401).json(error)
    }
}

//controller for get all chats
exports.getAllChatsController = async (req, res) => {
    console.log(`Inside get all chats controller`);

    try {
        const allChats = await chatsd.find()
        res.status(200).json(allChats)
    } catch (error) {
        res.status(401).json(error)
    }
}

//controller for delete chat
exports.deleteChatController = async (req, res) => {
    console.log(`Inside delete chat controller`);
    const { id } = req.params
    try {
        await chatsd.findByIdAndDelete({ _id: id })
        res.status(200).json(`User successfully deleted`)
    } catch (error) {
        res.status(401).json(error)
    }
}