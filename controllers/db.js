const Sequelize = require('sequelize');
const db = new Sequelize('devlove', 'root', '', {
    host: "localhost",
    dialect: "mysql2",

});

const environment = process.env.NODE_ENV;

db.sync({});

module.exports = db;