const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const server = express();

const recipeRouter = require("./recipes/recipe-router");

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api/recipes", recipeRouter);

server.get("/", (req, res) => {
  res.send("<h4>Hello from Recipe Book</h4>");
});

module.exports = server;
