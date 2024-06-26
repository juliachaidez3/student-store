const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// function that gets all the orders
const getAllOrders = async (filter = {}, orderBy = {}) => {
    return prisma.order.findMany({
        where: filter,
        orderBy: orderBy,
    });
};

// function to get order by ID
const getOrderById = async (id) => {
    return prisma.order.findUnique({where: {id:parseInt(id)}});
};

// function to create a new order
const createOrder = async (orderData) => {
    return prisma.order.create({
        data: {
            name: orderData.name,
            category: orderData.category,
            image_url: orderData.image_url,
            description: orderData.description,
            price: parseFloat(orderData.price),
        },
    });
};

// function to update a order
const updateOrder = async (id, orderData) => {
    return prisma.order.update({where: {id:parseInt(id)}, data: orderData,});
};

// function to delete a order
const deleteOrder = async (id) => {
    return prisma.order.delete({where: {id:parseInt(id)}});
};
  
// export the functions
module.exports = {
    getAllOrders,
    getOrderById,
    createOrder,
    updateOrder,
    deleteOrder,
};