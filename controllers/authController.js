// controllers/authController.js
const bcrypt = require('bcryptjs');
const jwt = require('../utils/jwt');
const User = require('../models/User');

exports.login = async (req, res) => {
  const { username, password } = req.body;
  console.log(username)
  try {
    const user = await User.findByUsername(username);
    console.log(user);
    if (!user) {
      
      return res.status(401).json({ message: 'Invalid credentials 1' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials 2' });
    }

    const token = jwt(user);
    res.cookie('token', token, { httpOnly: true, expires: new Date(Date.now() + 86400000) }).json({token:token, message: 'Login successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

exports.signup = async (req, res) => {
  const { username, password } = req.body;
  try {
    const existingUser = await User.findByUsername(username);
    if (existingUser) {
      return res.status(400).json({ message: 'Username already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({ username, password: hashedPassword });

    res.json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
