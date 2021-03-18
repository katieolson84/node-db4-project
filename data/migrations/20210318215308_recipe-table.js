exports.up = function(knex) {
  return knex.schema
  .createTable('recipes', tbl => {
      tbl.increments('recipe_id')
      tbl.string('recipe_name', 128).notNullable()
      tbl.strftime('created').notNullable()
  })
  .createTable('steps', tbl => {
      tbl.increments('step_id')
      tbl.increments("step_number")
      tbl.string('step_text', 128).notNullable()
      tbl.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('recipe_id')
        .inTable('recipes')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT')
  })
  .createTable('ingredients', tbl => {
      tbl.increments('ingredient_id')
      tbl.string('ingredient_name', 128)
  })
  .createTable('step_ingredients', tbl => {
      tbl.increments('step_ingredients_id')
      tbl.interger('step_id')
        .unsigned()
        .notNullable()
        .references('step_id')
        .inTable('steps')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT')
     tbl.integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('ingredient_id')
        .inTable('ingredients')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT')
     tbl.integer('quantity').notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('recipes')
  .dropTableIfExists('steps')
  .dropTableIfExists('ingredients')
  .dropTableIfExists('step_ingredients')
};
