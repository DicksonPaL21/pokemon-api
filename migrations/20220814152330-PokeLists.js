'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('PokeLists', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(32)
      },
      type_ids: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      createdBy: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedBy: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedBy: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      deletedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
    }, {
      modelName: 'PokeLists',
      tableName: 'pokelists',
      createdAt: 'createTimestamp',
      updatedAt: 'updateTimestamp',
      paranoid: true,
      deletedAt: 'destroyTime'
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('PokeLists');
  }
};