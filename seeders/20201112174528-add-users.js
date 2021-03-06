'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Users', [
      { username: 'joe', email: 'joe@joe.com', updatedAt: new Date(), createdAt: new Date() },
      { username: 'jesse', email: 'jesse@joe.com', updatedAt: new Date(), createdAt: new Date() },
      { username: 'mitchell', email: 'mitchell@joe.com', updatedAt: new Date(), createdAt: new Date() },
      { username: 'chris', email: 'chris@joe.com', updatedAt: new Date(), createdAt: new Date() },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Users', null, {});
  },
};
