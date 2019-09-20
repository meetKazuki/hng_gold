/* eslint-disable require-jsdoc */

import database from '../database/models';

const { User } = database;


class UserService {
  static async addUser(newUser) {
    /* eslint-disable-next-line no-useless-catch */
    try {
      return await User.create(newUser);
    } catch (error) {
      throw error;
    }
  }

  static async getAllUsers() {
    /* eslint-disable-next-line no-useless-catch */
    try {
      return await User.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async getAUser(id) {
    /* eslint-disable-next-line no-useless-catch */
    try {
      const theUser = await User.findOne({ where: { id } });
      return theUser;
    } catch (error) {
      throw error;
    }
  }

  static async getAUserByEmail(email) {
    /* eslint-disable-next-line no-useless-catch */
    try {
      const theUser = await User.findOne({ where: { email } });
      return theUser;
    } catch (error) {
      throw error;
    }
  }

  static async updateUser(id, userDetails) {
    /* eslint-disable-next-line no-useless-catch */
    try {
      const user = await User.findOne({ where: { id } });
      if (user) {
        await User.update(userDetails, { where: { id } });
        return user;
      }
    } catch (error) {
      throw error;
    }
  }
}

export default UserService;
