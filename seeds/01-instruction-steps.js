exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("instruction_steps")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("instruction_steps").insert([
        {
          instructions: "make flour dough",
          step_number: 1,
          recipe_id: 2
        },
        {
          instructions: "fry dough",
          step_number: 2,
          recipe_id: 1
        }
      ]);
    });
};
