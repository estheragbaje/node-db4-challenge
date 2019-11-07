const knex = require("knex");
const db = require("../data/db-config");

module.exports = {
  getRecipes
  //   getShoppingList,
  //   getInstructions
};

function getRecipes() {
  return db("recipes as re");
}

function getShoppingList(recipe_id) {
    
}
