exports.up = function(knex) {
  return knex.schema
    .createTable("recipes", table => {
      table.increments();
      table.string("recipe_name", 128).notNullable();
    })
    .createTable("ingredients", table => {
      table.increments();
      table
        .string("ingredient_name", 128)
        .unique()
        .notNullable();
    })
    .createTable("instruction_steps", table => {
      table.increments();
      table.string("instructions").notNullable();
      table
        .integer("step_number")
        .unsigned()
        .notNullable();
      table
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes"); // .onUpdate("CASCADE") // .onDelete("CASCADE");
    })
    .createTable("recipe_book", table => {
      table.increments();
      table
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes");
      table.decimal("quantity").notNullable();
      table
        .integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("ingredients");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("recipe_book")
    .dropTableIfExists("instruction_steps")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes");
};
