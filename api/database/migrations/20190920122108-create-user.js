module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.sequelize.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";').then(() => queryInterface.createTable('Users', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.DataTypes.UUID,
      defaultValue: Sequelize.literal('uuid_generate_v4()'),
    },
    username: {
      allowNull: false,
      type: Sequelize.STRING
    },
    email: {
      allowNull: false,
      unique: true,
      type: Sequelize.STRING
    },
    password: {
      allowNull: false,
      type: Sequelize.STRING
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.fn('now')
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.fn('now')
    }
  })),
  down: (queryInterface) => queryInterface.dropTable('Users')
};
