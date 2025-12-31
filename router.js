//import express
const express = require('express')
const jwtMiddleware = require('./middleware/jwtMiddleware')
const { registerController, loginController } = require('./controller/userController')
const multerConfig = require('./middleware/multerMiddleware')
const { addRecipeController } = require('./controller/recipeController')

const router = new express.Router()

//router for register
router.post(`/register`, registerController)

//router for login
router.post(`/login`, loginController, multerConfig.single("recipeImage"), addRecipeController)

//router for add recipe
router.post(`/add-recipe`,jwtMiddleware)

module.exports = router