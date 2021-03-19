exports.up = function(knex) {
  return knex.schema
  .createTable('recipes', tbl => {
      tbl.increments('recipe_id')
      tbl.string('recipe_name', 128).notNullable().unique()
      tbl.timestamp('created').defaultTo(knex.fn.now())
  })
  .createTable('steps', tbl => {
      tbl.increments('step_id')
      tbl.integer("step_number").notNullable()
      tbl.string('step_text', 128).notNullable()
      tbl.integer('recipe_id')
      .unsigned()
      .notNullable()
      .references('recipe_id')
      .inTable('recipes');
      
  })
  .createTable('ingredients', tbl => {
    tbl.increments('ingredient_id');
    tbl.string('ingredient_name', 128).notNullable().unique();
})
  .createTable('step_ingredients', tbl => {
    tbl.increments('step_ingredients_id');
    tbl.integer('step_id')
        .references('step_id')
        .inTable('steps');
    tbl.integer('ingredient_id')
        .references('ingredient_id')
        .inTable('ingredients')
    tbl.string('amount', 128).notNullable()
    })
};


exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('step_ingredients')
  .dropTableIfExists('ingredients')
  .dropTableIfExists('steps')
  .dropTableIfExists('recipes')
};
