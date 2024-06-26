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
const getOrderById = async (order_id) => {
    return prisma.order.findUnique({where: {order_id:parseInt(order_id)}});
};

// function to create a new order
const createOrder = async (orderData) => {
    return prisma.order.create({
        data: {
            customer_id: parseInt(orderData.customer_id),
            total_price: parseFloat(orderData.total_price),
            status: orderData.status,
        },
    });
};

// function to update a order
const updateOrder = async (order_id, orderData) => {
    return prisma.order.update({where: {order_id:parseInt(order_id)}, data: orderData,});
};

// function to delete a order
const deleteOrder = async (order_id) => {
    return prisma.order.delete({where: {order_id:parseInt(order_id)}});
};
  
// export the functions
module.exports = {
    getAllOrders,
    getOrderById,
    createOrder,
    updateOrder,
    deleteOrder,
};