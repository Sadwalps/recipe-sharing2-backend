//import mongoose
const mongoose = require('mongoose')

const recipeSchema = new mongoose.Schema({
    recipename: {
        required: true,
        type: String
    },
    time: {
        required: true,
        type: String
    },
    incredients: {
        required: true,
        type: String
    },
    category: {
        required: true,
        type: String
    },
    recipeImage: {
        required: true,
        type: String
    },
    userId: {
        required: true,
        type: String
    }

})

const recipes = mongoose.model("recipes", recipeSchema)
module.exports = recipes



