/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("pokemon").del();
  await knex("pokemon").insert([
    { id: 1, name: "Bulbasaur", type: "grass" },
    { id: 2, name: "Ivysaur", type: "grass" },
    { id: 3, name: "Venusaur", type: "grass" },
  ]);
};
