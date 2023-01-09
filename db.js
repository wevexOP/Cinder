const Sequelize = require('sequelize');
const db = new Sequelize('devlove', 'root', '', {
    host: "localhost",
    dialect: "mysql2",

});

module.exports = db;