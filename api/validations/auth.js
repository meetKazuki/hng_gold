import { check } from 'express-validator';

export default {
  signupSchema: [
    check('username')
      .trim()
      .exists().withMessage('Username is required')
      .isLength({ min: 2, max: 15 })
      .withMessage('Username should be between 2 to 15 characters')
      .isAlpha()
      .withMessage('Username should only contain alphabets'),

    check('email')
      .trim()
      .exists().withMessage('Email address is required')
      .isEmail()
      .withMessage('Enter a valid email address')
      .customSanitizer((email) => email.toLowerCase()),

    check('password')
      .trim()
      .exists().withMessage('Password is required')
      .isLength({ min: 8, max: 15 })
      .withMessage('Password should be between 8 to 15 characters'),
  ],

  signinSchema: [
    check('email')
      .trim()
      .exists().withMessage('Email address is required')
      .isEmail()
      .withMessage('Enter a valid email address')
      .customSanitizer((email) => email.toLowerCase()),

    check('password')
      .trim()
      .exists().withMessage('Password is required')
      .isLength({ min: 8, max: 15 })
      .withMessage('Password should be between 8 to 15 characters'),
  ]
};
