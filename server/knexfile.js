// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
const settings = {

    development: {
      client: 'pg',
      connection: {
        host: 'localhost',
        database: 'authenticator',
        user:     'postgres',
        password: 'admin'
      },
      seeds: {
        directory: './seeds'
      }
    },
  
    staging: {
      client: 'pg',
      connection: {
        database: 'authenticator',
        user:     'postgres',
        password: 'admin'
      },
      pool: {
        min: 2,
        max: 10
      },
      migrations: {
        tableName: 'knex_migrations'
      }
    },
  
    production: {
      client: 'pg',
      connection: {
        database: 'authenticator',
        user:     'postgres',
        password: 'admin'
      },
      pool: {
        min: 2,
        max: 10
      },
      migrations: {
        tableName: 'knex_migrations'
      }
    }
  
  };
  
  module.exports = require('knex')(settings.development);
  //module.exports = settings.development;