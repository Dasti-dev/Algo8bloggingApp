const db = require('../config/db');

class User {
  static findByUsername(username) {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM users WHERE username = ?', username, (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows[0]); 
        }
      });
    });
  }

  static create(data) {
    return new Promise((resolve, reject) => {
      db.query('INSERT INTO users SET ?', data, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }
}

module.exports = User;
