/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('account', table => {
    table.increments('id')
    table.integer('user').unsigned().notNullable()
    table.integer('service').unsigned().notNullable()
    table.foreign('user').references('id').inTable('user').onUpdate('CASCADE').onDelete('CASCADE')
    table.foreign('service').references('id').inTable('service').onUpdate('CASCADE').onDelete('CASCADE')
    table.string('secret_key').notNullable()
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('account')
};
