'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
        name: 'Joe',
        email: 'john@example.com',
        password: '$2y$10$207Z/LP/x/Gq8gey7NB/yejZ.4o37XGbZtepV0X2W3XefBqdi.E9O',
        createdAt: new Date(),
        updatedAt: new Date()
      }]);
    
  },

  down: async (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('users', null, {});

  }
};
