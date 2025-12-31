const recipes = require('../models/recipeModel')

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