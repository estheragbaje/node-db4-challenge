const express = require("express");

const Recipes = require("./recipe-model.js");
const db = require("../data/db-config");

const router = express.Router();

router.get("/", (req, res) => {
  Recipes.getRecipes()
    .then(recipes => {
      res.json(recipes);
    })
    .catch(error => {
      res.status(500).json({
        message: "failed to get recipes"
      });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  Recipes.getShoppingList(id)
    .then(recipe => {
      if (recipe) {
        res.json(recipe);
      } else {
        res
          .status(404)
          .json({ message: "Could not find recipe with given id." });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get recipes" });
    });
});

module.exports = router;
