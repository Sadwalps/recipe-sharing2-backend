//import express
const express = require('express')
const jwtMiddleware = require('./middleware/jwtMiddleware')
const { registerController, loginController } = require('./controller/userController')
const multerConfig = require('./middleware/multerMiddleware')
const { addRecipeController, getHomeRecipeController, getUserRecipeController, deleteUserRecipeController } = require('./controller/recipeController')

const router = new express.Router()

//router for register
router.post(`/register`, registerController)

//router for login
router.post(`/login`, loginController)

//router for add recipe
router.post(`/add-recipe`, jwtMiddleware, multerConfig.single("recipeImage"), addRecipeController)

//router for get home recipes
router.get(`/home-recipes`, getHomeRecipeController)

//router for get user recipes
router.get(`/user-recipe`, jwtMiddleware, getUserRecipeController)

//router for delete user recipes
router.delete(`/delete-recipe/:id`, jwtMiddleware, deleteUserRecipeController)



module.exports = router