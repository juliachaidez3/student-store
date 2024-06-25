const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// function that gets all the cars
const getAllProducts = async () => {
    return prisma.product.findMany();
};

// function to get product by ID
const getProductById = async (id) => {
    return products.find((product) => products.id === parseInt(id));
};

// function to create a new product
const createProduct = async (newProduct) => {
    const newId = products.length ? products[products.length - 1].id + 1 : 1;
    newProduct.id = newId;
    products.push(newProduct);
    return newProduct;
};

// export the functions 

module.exports = {
    getAllProducts,
    getProductById,
    createProduct
};