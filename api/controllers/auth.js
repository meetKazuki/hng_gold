import database from '../database/models';
import Response from '../helpers/response';
import { generateToken, verifyPassword } from '../helpers/auth';

const { User } = database;
const response = new Response();

/**
 * @class AuthController
 */
class AuthController {
  /**
   * Signup user
   * Route: POST: /auth/signup
   * @param {object} req object
   * @param {object} res object
   * @returns {object} user object
   * @memberof AuthController
   */
  static async signup(req, res) {
    const newUser = await User.create(req.body);
    const { password, ...user } = newUser.dataValues;
    const token = generateToken({ newUser });
    response.setSuccess(
      201,
      'Signup successful!',
      {
        token, user
      }
    );
    return response.send(res);
  }

  /**
   * Signin user
   * Route: POST: /auth/signin
   * @param {object} req object
   * @param {object} res object
   * @returns {object} user object
   * @memberof AuthController
   */
  static async signin(req, res) {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      response.setError(401, 'Email/password is incorrect');
      return response.send(res);
    }
    const isPassword = verifyPassword(password, user.password);
    if (!isPassword) {
      response.setError(401, 'Email/password is incorrect');
      return response.send(res);
    }

    delete user.dataValues.password;
    const token = generateToken({ user });
    response.setSuccess(200, 'Signin successful!', { token, user });
    return response.send(res);
  }
}

export default AuthController;
