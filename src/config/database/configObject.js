require('dotenv').config({ path: process.env.DOTENV_PATH });

const databaseConfigObj = {
  production: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    logging: false,
    dialect: 'postgres',
  },
  development: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    logging: false,
    dialect: 'postgres',
  },
  test: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    logging: false,
    dialect: 'postgres',
    define: {
      paranoid: false,
      timestamps: true,
      freezeTableName: true,
      underscored: true
    },
  },
};

module.exports = databaseConfigObj;