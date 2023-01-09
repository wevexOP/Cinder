const { Model, DataTypes } = require('sequelize');
const sequelize = require("../config/sequelize");

class Profile extends Model {}

Profile.init(
    {
        
        fullName:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        userEmail:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        userPhone:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        userPhone:{
            type:DataTypes.STRING,
            allowNull:false,
        },
    },
    {
        sequelize,
    },

);

module.exports = Profile;