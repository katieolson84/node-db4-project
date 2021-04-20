
exports.seed = function (knex) {

  return knex('steps')
    .truncate()
    .then(function () {
      return knex('steps').insert([
        {
          step_number: 1, 
          step_text: 'Fill a pot with water and put on medium heat',
          recipe_id: 1,
        },
        {
          step_number: 2, 
          step_text: 'Prepare sauce while water boils. Start by chopping garlic and onions.',
          recipe_id: 1,
        },
      ]);
    });
};
