exports.seed = function (knex) {
  return knex('ingredients')
    .truncate()
    .then(function () {
      return knex('ingredients').insert([
        { ingredient_name: 'Oilve Oil' },
        { ingredient_name: 'Garlic' },
        { ingredient_name: 'Onions' },
        { ingredient_name: 'Whole Canned Tomatoes' },
        { ingredient_name: 'Spaghetti Noodles' },
      ]);
    });
};
