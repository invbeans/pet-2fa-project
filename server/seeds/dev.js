/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('service').del()
  await knex('service').insert([
    {name: 'Яндекс'},
    {name: 'Телеграм'},
    {name: 'Google'},
    {name: 'ВК'}
  ]);
};
