// import productModel
const productModel = require("../models/productModel");

const getAllProducts = async (req, res) => {
    try {
        const products = await productModel.getAllProducts();
        res.status(200).json(products);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

const getProductById = async (req, res) => {
    try {
       const product = await productModel.getProductById(req.params.id);
       if (product) {
        res.status(200).json(product);
       } else {
        res.status(404).json({error: "Product not found"});
       }
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

const createProduct = async (req, res) => {
    try {
        const newProduct = await productModel.createProduct(req.body);
        res.status(201).json(newProduct);

    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

// export the function

module.exports = {
    getAllProducts,
    getProductById,
    createProduct
}