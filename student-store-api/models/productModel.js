const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// function that gets all the products
const getAllProducts = async (filter = {}, orderBy = {}) => {
    return prisma.product.findMany({
        where: filter,
        orderBy: orderBy,
    });
};

// function to get product by ID
const getProductById = async (id) => {
    return prisma.product.findUnique({where: {id:parseInt(id)}});
};

// function to create a new product
const createProduct = async (productData) => {
    return prisma.product.create({
        data: 
            productData
        
    });
};

// function to update a product
const updateProduct = async (id, productData) => {
    return prisma.product.update({where: {id:parseInt(id)}, data: productData,});
};

// function to delete a product
const deleteProduct = async (id) => {
    return prisma.product.delete({where: {id:parseInt(id)}});
};
  
// export the functions
module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
};