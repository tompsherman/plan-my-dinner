
exports.up = function(knex) {
  return knex.schema.createTable("dinners", table => {
      table.increments()
      table.string("mainCourse", 128).notNullable()
      table.string("ingredient1", 128)
      table.string("ingredient2", 128)
      table.string("sideDish", 128)
      table.string("ingredient3", 128)
      table.string("ingredient4", 128)
  })
  .createTable("fridge", table =>{
      table.increments()
      table.string("food", 128)
      table.decimal("amount")
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("fridge").dropTableIfExists("dinners")
};
