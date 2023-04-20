const { Sequelize } = require("sequelize");
const config = require("../../config");

const envieroment = config.nodeEnv;

const db = new Sequelize(config.db[envieroment]);

module.exports = db;
