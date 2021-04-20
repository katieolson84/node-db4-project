

const checkId = async (req, res, next) => {
    

    if(!recipes.recipe_id) {
        res.status(400).json({message: `Recipe with ${recipes.recipe_id} does not exist`})
    }else{
        next()
    }
}

module.exports = {
    checkId,
}