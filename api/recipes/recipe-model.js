const db= require('../../data/dbConfig');

const get= () => {
    return db('recipes')
}

const getById= async (recipe_id) => {
    const recipe = await db('recipes as r')
    .select('r.*', 'steps as st', )
    .where('r.recipes_id', recipe_id)
    .first()
    return recipe
}
module.exports = {
    get, 
    getById,
}