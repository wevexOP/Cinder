const Sequelize = require('sequelize');
const db = new Sequelize('devlove', 'root', '', {
    host: "localhost",
    dialect: "mysql",

});

module.exports = db;