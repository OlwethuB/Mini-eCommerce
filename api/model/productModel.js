// Import connection
const db = require("../config/database");

class Products {
    // Get all products
  getProducts = (result) => {
    db.query("SELECT * FROM product", (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
    });
  };

    // Get single product
  getProduct = (id, result) => {
    db.query(
      "SELECT * FROM product WHERE product_id = ?",
      [id],
      (err, results) => {
        if (err) {
          console.log(err);
          result(err, null);
        } else {
          result(null, results[0]);
        }
      }
    );
  };

    // Insert product into database
  insertProduct = (data, result) => {
    db.query("INSERT INTO product SET ?", [data], (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
    });
  };

    // Update Product to database
  updateProductById = (data, id, result) => {
    db.query(
      "UPDATE product SET product_name = ?, product_price = ? WHERE product_id = ?",
      [data.product_name, data.product_price, id],
      (err, results) => {
        if (err) {
          console.log(err);
          result(err, null);
        } else {
          result(null, results);
        }
      }
    );
  };

    // Delete a product from database
  deleteProductById = (id, result) => {
    db.query(
      "DELETE FROM product WHERE product_id = ?",
      [id],
      (err, results) => {
        if (err) {
          console.log(err);
          result(err, null);
        } else {
          result(null, results);
        }
      }
    );
  };
}

module.exports = Products
