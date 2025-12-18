//import express
const express = require('express')
const { registerController } = require('./controller/userController')

const router = new express.Router()

//router for register
router.post(`/register`, registerController)

module.exports = router