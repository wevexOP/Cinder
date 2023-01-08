'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  
     await queryInterface.createTable('users', { 
      
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
      }});
     
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
