const express = require('express');
const Recipes = require('./recipe-model')
const { checkId } = require('./recipe-middleware')

const router = express.Router();

router.get('/', (req, res, next) => {
    Recipes.get()
    .then(recipes => {
        res.json(recipes)
    })
    .catch(next)
})

router.get('/:id', checkId, (req,res,next) => {
    const {recipe_id} = req.params
    Recipes.getById(recipe_id)
    .then(recipe => {
        res.json(recipe)
    })
    .catch(next)
})

module.exports = router