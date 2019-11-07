const knex = require("knex");
const db = require("../data/db-config");

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
};

function getRecipes() {
  return db("recipes");
}

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

function getInstructions(recipe_id) {
  return db("instruction_steps as steps")
    .select("steps.instructions")
    .orderBy("steps.step_number")
    .where({ recipe_id });
}
