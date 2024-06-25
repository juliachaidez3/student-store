const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

// get all the products
router.get("/", productController.getAllProducts);

// get product by ID
router.get("/:id", productController.getProductById);

// add a new product
router.post("/", productController.createProduct);

// update a product
router.put();

// delete a product
router.delete();

module.exports = router;