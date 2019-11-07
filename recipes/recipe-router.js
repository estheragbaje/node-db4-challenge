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

module.exports = router;
