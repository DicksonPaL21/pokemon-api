'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Types',
      [
        {
          id: 1,
          type: 'Normal',
          // created_at: new Date()
        },
        {
          id: 2,
          type: 'Fighting',
          // created_at: new Date()
        },
        {
          id: 3,
          type: 'Flying',
          // created_at: new Date()
        },
        {
          id: 4,
          type: 'Poison',
          // created_at: new Date()
        },
        {
          id: 5,
          type: 'Ground',
          // created_at: new Date()
        },
        {
          id: 6,
          type: 'Rock',
          // created_at: new Date()
        },
        {
          id: 7,
          type: 'Bug',
          // created_at: new Date()
        },
        {
          id: 8,
          type: 'Ghost',
          // created_at: new Date()
        },
        {
          id: 9,
          type: 'Steel',
          // created_at: new Date()
        },
        {
          id: 10,
          type: 'Fire',
          // created_at: new Date()
        },
        {
          id: 11,
          type: 'Water',
          // created_at: new Date()
        },
        {
          id: 12,
          type: 'Grass',
          // created_at: new Date()
        },
        {
          id: 13,
          type: 'Electric',
          // created_at: new Date()
        },
        {
          id: 14,
          type: 'Psychic',
          // created_at: new Date()
        },
        {
          id: 15,
          type: 'Ice',
          // created_at: new Date()
        },
        {
          id: 16,
          type: 'Dragon',
          // created_at: new Date()
        },
        {
          id: 17,
          type: 'Dark',
          // created_at: new Date()
        },
        {
          id: 18,
          type: 'Fairy',
          // created_at: new Date()
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Types', null, {});
  },
};
