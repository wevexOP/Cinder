const { Model, DataTypes } = require('sequelize');
const sequelize = require("../config/sequelize");

class User extends Model {}

User.init(
    {
        
        email:{
            type:DataTypes.STRING,
            allowNull:false,
            unique:true,
        },
        display_name:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        password_hash:{
            type:DataTypes.STRING,
            allowNull:false,
        },
    },
    {
        sequelize,
    },

);

module.exports = User;



/* module.exports = db.define('users', {
    id:{
        type:sequelize.INTEGER(30),
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    },
	email:{
        type:sequalize.STRING,
        allowNull:false,
        unique:true,

    },
    display_name:{
        type:sequalize.STRING,
        allowNull:false,
        unique:true,
    },
	password_hash:{
        type:sequalize.STRING,
        allowNull:false,
        unique:true,
    },
	gender:{
        type:sequalize.STRING,
        allowNull:false,
        unique:true,
    },
	dating_status:{
        type:sequalize.STRING,
        allowNull:false,
        unique:true,
    },
	bio:{
        type:sequalize.STRING,
        allowNull:false,
        unique:true,
    },
	langs:{
        type:sequalize.STRING,
        allowNull:false,
        unique:true,
    },
	linkedin:{
        type:sequalize.STRING,
        allowNull:false,
        unique:true,
    },
	github:{
        type:sequalize.STRING,
        allowNull:false,
        unique:true,
    }
}) */