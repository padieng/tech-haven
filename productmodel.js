const db = require('../db');

exports.getAllProducts = () => {
  return db.prepare('SELECT * FROM products').all();
};

exports.getProductById = (id) => {
  return db.prepare('SELECT * FROM products WHERE id = ?').get(id);
};
