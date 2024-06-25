// import productModel
const productModel = require("../models/productModel");

// function that gets all the products
const getAllProducts = async (req, res) => {
    const { category, name, price } = req.query;
    let filter = {}; // filter object
    let orderBy = {}; // order by asc or desc

    // add desired category to filter list
    if (category) filter.category = category;

    // sort alphabetically
    if (name) orderBy = { name: name === "asc" ? "asc" : "desc" };

    // sort by price, either asc or des
    if (price) orderBy = { price: price === "asc" ? "asc" : "desc"};

    try {
        const products = await productModel.getAllProducts(filter, orderBy);
        res.status(200).json(products);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

// function to get product by ID
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
};

// function to create a new product
const createProduct = async (req, res) => {
    try {
        const newProduct = await productModel.createProduct(req.body);
        res.status(201).json(newProduct);

    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

// function to update a product
const updateProduct = async (req, res) => {
    try {
        const updateProduct = await productModel.updateProduct(req.params.id, req.body);
        if (updateProduct) {
            res.status(200).json(updateProduct);
        } else {
            res.status(404).json({ error: "Car not found" });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// function to delete a product
const deleteProduct = async (req, res) => {
    try {
        const deleteProduct = await productModel.deleteProduct(req.params.id);
        if (deleteProduct) {
            res.status(200).json(deleteProduct);
        } else {
            res.status(404).json({ error: "Car not found" });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// export the function
module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
};