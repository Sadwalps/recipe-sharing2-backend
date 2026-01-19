//import mongoose
const mongoose = require('mongoose')

const adminSchema = new mongoose.Schema({
    adminname: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String,
        unique: true
    },
    password: {
        required: true,
        type: String
    }
})

const admins = mongoose.model("admins", adminSchema)
module.exports = admins