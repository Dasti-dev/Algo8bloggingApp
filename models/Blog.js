const db = require('../config/db');

class Blog {
  static getAll(callback) {
    db.query('SELECT * FROM blogs', callback);
  }
  
  static getById(id, callback) {
    db.query('SELECT * FROM blogs WHERE id = ?', id, callback);
  }
  
  static create(data, callback) {
    db.query('INSERT INTO blogs SET ?', data, callback);
  }
  
  static update(id, data, callback) {
    db.query('UPDATE blogs SET ? WHERE id = ?', [data, id], callback);
  }
  
  static delete(id, callback) {
    db.query('DELETE FROM blogs WHERE id = ?', id, callback);
  }
}

module.exports = Blog;
