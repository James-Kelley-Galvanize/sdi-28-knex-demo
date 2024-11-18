const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const { getAllPokemon } = require("./controllers");

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/pokemon", (req, res) => {
  getAllPokemon()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(404).send(err);
    });
});

module.exports = app;
