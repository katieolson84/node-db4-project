const knex = require("knex");
const knexConfig = require('../knexfile');
const env = process.env.NODE_ENV || "development";

const db = knex(configs[env])

module.exports = db