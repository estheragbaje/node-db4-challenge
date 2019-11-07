const knex = require("knex");
const db = require("../data/db-config");

module.exports = {
  getRecipes,
  getShoppingList
  //   getInstructions
};

function getRecipes() {
  return db("recipes");
}

// function getShoppingList(recipe_id) {
//   return db("recipe_book")
//     .where({ recipe_id })
//     .first();
// }

/**
 * 
 *
select * from recipe_book
join recipes
on recipe_book.recipe_id = recipes.id
join ingredients
on recipe_book.ingredient_id = ingredients.id
where recipe_book.recipe_id = 2;
 */

function getShoppingList(recipe_id) {
  return db("recipe_book")
    .join("recipes", "recipe_book.recipe_id", "recipes.id")
    .join("ingredients", "recipe_book.ingredient_id", "ingredients.id")
    .select(
      "recipe_book.quantity",
      "recipes.recipe_name",
      "ingredients.ingredient_name"
    )
    .where({ recipe_id });
}
