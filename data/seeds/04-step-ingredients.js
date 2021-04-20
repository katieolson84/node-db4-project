exports.seed = function (knex) {

  return knex('recipe_ingredients')
    .truncate()
    .then(function () {
     
      return knex('recipe_ingredients').insert([
        { step_id: 1, ingredient_id: 1, amount: "1 TB" },
      
      ]);
    });
};
