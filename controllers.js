const knex = require("knex")(require("./knexfile")["development"]);

function getAllPokemon() {
  return knex("pokemon").select("*");
}

module.exports = { getAllPokemon };
