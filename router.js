//import express
const express = require('express')
const jwtMiddleware = require('./middleware/jwtMiddleware')
const { registerController, loginController } = require('./controller/userController')
const multerConfig = require('./middleware/multerMiddleware')
const { addRecipeController, getHomeRecipeController, getUserRecipeController, deleteUserRecipeController, getAllRecipeController, editUserRecipeController } = require('./controller/recipeController')
const { adminRegisterController, adminLoginController, getUsersDetailsController, deleteUserController, getAllRecipesController } = require('./controller/adminController')
const { addChatController } = require('./controller/chatController')

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

//router for get all recipes
router.get(`/all-recipes`, jwtMiddleware, getAllRecipeController)

//router for update user recipe
router.put(`/update-userrecipe/:id`, jwtMiddleware, multerConfig.single("recipeImage"), editUserRecipeController)

//router for admin register
router.post(`/admin-register`, adminRegisterController)

//router for admin login
router.post(`/admin-login`, adminLoginController)
//router for get all users details
router.get(`/all-users`, getUsersDetailsController)

//router for delete users
router.delete(`/delete-user/:id`, jwtMiddleware, deleteUserController)

//router for get all recipes for admin
router.get(`/admin-all-recipes`, jwtMiddleware, getAllRecipesController)

//router for add chats
router.post(`/add-chats`, jwtMiddleware, addChatController)

module.exports = router