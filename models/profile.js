const { Model, DataTypes } = require('sequelize');
const sequelize = require("../config/sequelize");

class Profile extends Model {}

Profile.init(
    {
        
        userFullName:{
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
        userOccupation:{
            type:DataTypes.STRING,
            allowNull:true,
        },
        userLocation:{
            type:DataTypes.STRING,
            allowNull:true,
        }
    },
    {
        sequelize,
    },

);

module.exports = Profile;