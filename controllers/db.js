const Sequelize = require('sequelize');
const db = new Sequelize('devlove', 'root', '', {
    host: "localhost",
    dialect: "mysql2",

});

const environment = process.env.NODE_ENV || "development";

db.sync({});

module.exports = db;