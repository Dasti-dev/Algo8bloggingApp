// models/User.js
const db = require('../config/db');

class User {
  static findByUsername(username, callback) {
    db.query('SELECT * FROM users WHERE username = ?', username, callback);
  }
  
  static create(data, callback) {
    db.query('INSERT INTO users SET ?', data, callback);
  }
}

module.exports = User;
