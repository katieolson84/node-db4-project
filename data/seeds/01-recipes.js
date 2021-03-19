
exports.seed = function(knex) {
  return knex('recipes')
  .then(function () {
    return knex('recipes').insert([
      {recipe_name: "Spaghetti Bolognese"},
      {recipe_name: "Macaroni and Cheese"},
      {recipe_name: "Lasagna"},
    ])
  })
};
