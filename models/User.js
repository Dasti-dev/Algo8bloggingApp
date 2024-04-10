// models/User.js
const db = require('../config/db');

class User {
  static findByUsername(username, callback) {
    db.query('SELECT * FROM users WHERE username = ?', username, callback);
  }
}

module.exports = User;
