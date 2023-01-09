const Sequelize = require('sequelize');
const db = new Sequelize('devlove', 'root', '', {
    host: "localhost",
    dialect: "mysql",

});

db.sync({});

module.exports = db;