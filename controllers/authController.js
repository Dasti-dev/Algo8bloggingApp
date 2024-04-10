// controllers/authController.js
const bcrypt = require('bcryptjs');
const jwt = require('../utils/jwt');
const User = require('../models/User');

exports.login = (req, res) => {
  const { username, password } = req.body;

  User.findByUsername(username, (err, user) => {
    if (err || !user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    bcrypt.compare(password, user.password, (err, result) => {
      if (err || !result) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }

      const token = jwt(user);
      res.cookie('token', token, { httpOnly: true }).json({ message: 'Login successful' });
    });
  });
};

exports.signup = (req, res) => {
  const { username, password } = req.body;

  // Check if username is already taken
  User.findByUsername(username, (err, user) => {
    if (err) {
      return res.status(500).json({ message: 'Internal Server Error' });
    }
    if (user) {
      return res.status(400).json({ message: 'Username already exists' });
    }

    // Hash the password
    bcrypt.hash(password, 10, (err, hashedPassword) => {
      if (err) {
        return res.status(500).json({ message: 'Internal Server Error' });
      }

      // Create the user
      User.create({ username, password: hashedPassword }, (err, result) => {
        if (err) {
          return res.status(500).json({ message: 'Internal Server Error' });
        }
        res.json({ message: 'User registered successfully' });
      });
    });
  });
};