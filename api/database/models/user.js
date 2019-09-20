import { hashPassword } from '../../helpers/auth';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});

  User.beforeCreate(async (user) => {
    user.password = await hashPassword(user.password);
  });

  User.beforeUpdate(async (user) => {
    user.password = await hashPassword(user.password);
  });

  User.associate = (models) => {
    // associations can be defined here
  };
  return User;
};
