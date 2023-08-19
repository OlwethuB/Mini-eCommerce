module.exports = (app) => {
  // import express
  // import function from controller
  const Product = require("../controller/Product");

  // init express router
  var router = require("express").Router();

  // Get all products
  router.get("/products", Product.showProducts);
  // Get single product
  router.get("/product/:id", Product.getProductId);
  // Create new product
  router.post("/products", Product.createProduct);
  // Update a product
  router.put("/product/:id", Product.updateProduct);
  // Delete a product
  router.delete("/product/:id", Product.deleteProduct);

  app.use("/api/products", router);
};
