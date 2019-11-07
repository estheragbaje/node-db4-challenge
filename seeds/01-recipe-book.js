exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("recipe_book")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("recipe_book").insert([
        { recipe_id: 2, quantity: "200g", ingredient_id: 2 },
        { recipe_id: 3, quantity: "100g", ingredient_id: 1 },
        { recipe_id: 1, quantity: "500g", ingredient_id: 2 }
      ]);
    });
};
