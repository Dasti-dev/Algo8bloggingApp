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
