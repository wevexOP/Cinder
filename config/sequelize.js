const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    process.env.DB_NAME, 
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
    host: process.env.DB_HOST,
    dialect: 'mysql',
});

const sequelize2 = new Sequelize(
    process.env.DB_NAME2, 
    process.env.DB_USER2,
    process.env.DB_PASSWORD2,
    {
    host: process.env.DB_HOST,
    dialect: 'mysql',
});

module.exports = sequelize;
module.exports = sequelize2;