const recipes = require('../models/recipeModel')

//controller for add recipes
exports.addRecipeController = async (req, res) => {
    console.log(`Inside add recipe controller`);

    const { recipename, time, incredients, category } = req.body
    console.log(recipename, time, incredients, category);

    const recipeImage = req.file.filename
    console.log(recipeImage);

    const userId = req.payload
    console.log(userId);


    try {

        const existingRecipe = await recipes.findOne({ recipename })
        if (existingRecipe) {
            res.status(406).json(`Recipe already exists`)
        } else {
            const newRecipe = new recipes({
                recipename, time, incredients, category, recipeImage, userId
            })
            await newRecipe.save()
            res.status(200).json(newRecipe)
        }
    } catch (error) {
        res.status(401).json(error)
    }
}

//controller for get home recipes
exports.getHomeRecipeController = async (req, res) => {
    console.log(`Inside get home recipes controller `);

    try {
        const homeRecipes = await recipes.find().limit(4)
        res.status(200).json(homeRecipes)

    } catch (error) {
        res.status(401).json(error)
    }
}

//controller for get user recipes
exports.getUserRecipeController = async (req, res) => {
    console.log(`Inside user recipes controller`);
    const userId = req.payload
    console.log(userId);

    try {
        const userRecipes = await recipes.find({ userId })
        res.status(200).json(userRecipes)
    } catch (error) {
        res.status(406).json(error)
    }

}

//controller for delete use recipes
exports.deleteUserRecipeController = async (req, res) => {
    console.log(`Inside delete user recipe controller`);
    const { id } = req.params

    try {
        await recipes.findByIdAndDelete({ _id: id })
        res.status(200).json(`Recipe successfully deleted`)
    } catch (error) {
        res.status(401).json(error)
    }

}