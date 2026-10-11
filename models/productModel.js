const db = require('../config/db');

const Product = {
  getAll: (cb) => db.query("SELECT * FROM products", cb),

  getById: (id, cb) => db.query("SELECT * FROM products WHERE id = ?", [id], cb),

  create: (data, cb) => db.query("INSERT INTO products (name, quantity, price) VALUES (?, ?, ?)",
    [data.name, data.quantity, data.price], cb),

  update: (id, data, cb) => db.query("UPDATE products SET name = ?, quantity = ?, price = ? WHERE id = ?",
    [data.name, data.quantity, data.price, id], cb),

  delete: (id, cb) => db.query("DELETE FROM products WHERE id = ?", [id], cb)
};

module.exports = Product;
