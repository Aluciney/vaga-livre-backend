require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USER_DEV,
    password: process.env.DB_PASS_DEV,
    database: process.env.DB_NAME_DEV,
    host: process.env.DB_HOST_DEV,
    dialect: process.env.DB_DIALECT_DEV,
    logging: false,
    dialectOptions: {
        ssl: {
            require: process.env.DB_SSL_DEV,
            rejectUnauthorized: false,
        }
    },
    define: { freezeTableName: true }
  },
  test: {
    username: process.env.DB_USER_TEST,
    password: process.env.DB_PASS_TEST,
    database: process.env.DB_NAME_TEST,
    host: process.env.DB_HOST_TEST,
    dialect: process.env.DB_DIALECT_TEST,
    dialectOptions: {
        ssl: {
            require: process.env.DB_SSL_DEV,
            rejectUnauthorized: false,
        }
    },
    logging: false,
    define: { freezeTableName: true }
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    logging: false,
    dialectOptions: {
        ssl: {
            require: process.env.DB_SSL_DEV,
            rejectUnauthorized: false,
        }
    },
    define: { freezeTableName: true }
  }
}