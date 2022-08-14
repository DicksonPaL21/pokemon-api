'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Statistics', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      poke_id: {
        allowNull: false,
        type: Sequelize.INTEGER(6)
      },
      health: {
        allowNull: false,
        type: Sequelize.INTEGER(6)
      },
      attack: {
        allowNull: false,
        type: Sequelize.INTEGER(6)
      },
      sp_attack: {
        allowNull: false,
        type: Sequelize.INTEGER(6)
      },
      defense: {
        allowNull: false,
        type: Sequelize.INTEGER(6)
      },
      sp_defense: {
        allowNull: false,
        type: Sequelize.INTEGER(6)
      },
      speed: {
        allowNull: false,
        type: Sequelize.INTEGER(6)
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Statistics');
  }
};