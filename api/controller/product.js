    // import function from Product Model 
    const Product = require("../model/productModel.js");

    // Get all products
exports.showProducts = (req, res) => {
    Product.getProducts((err, results) => {
        if (err){
            res.send(err);
        } else {
            res.json(results)
        }
    })
}

    // Get single Product
exports.getProductId = (req, res) => {
    Product.getProductId(req.params.id, (err,results) => {
        if (err){
            res.send(err);
        } else {
            res.json(results);
        }
    })
}

    // create a new Product 
exports.createProduct = (req, res) => {
    const data = req.body;
    Product.insertProduct(data, (err, results) => {
        if (err){
            res.send(err);
        } else {
            res.json(results);
        }
    })
}

    // Update Product 
exports.updateProduct = (req, res) => {
    const data = req.body;
    const id = req.params.id;
    Product.updateProductById(data, id, (err, results) => {
        if (err){
            res.send(err);
        } else {
            res.json(results);
        }
    })
}

    // Delete Product 
exports.deleteProduct = (req, res) => {
    const id = req.params.id;
    Product.deleteProductById(id, (err, results) => {
        if (err){
            res.send(err);
        } else {
            res.json(results);
        }
    })
}