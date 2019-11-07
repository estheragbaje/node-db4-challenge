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
          recipe_id: 1
        },
        {
          instructions: "fry dough",
          step_number: 2,
          recipe_id: 1
        },
        {
          instructions: "wrap doughnut in sugar",
          step_number: 3,
          recipe_id: 1
        },
        {
          instructions: "blend beans",
          step_number: 2,
          recipe_id: 3
        },
        {
          instructions: "boil blended beans",
          step_number: 3,
          recipe_id: 3
        },
        {
          instructions: "peel beans",
          step_number: 1,
          recipe_id: 3
        }
      ]);
    });
};
