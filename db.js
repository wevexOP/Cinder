const Sequalize = require('sequalize');
const db = new Sequalize('devlove', 'root', '', {
    host: "localhost",
    dialect: "mysql",

});

module.exports = db;