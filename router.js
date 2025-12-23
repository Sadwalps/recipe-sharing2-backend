//import express
const express = require('express')
const { registerController, loginController } = require('./controller/userController')

const router = new express.Router()

//router for register
router.post(`/register`, registerController)

//router for login
router.post(`/login`, loginController)

module.exports = router