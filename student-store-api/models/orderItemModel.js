const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// function that gets all the orderItems
const getAllOrderItems = async (filter = {}, orderBy = {}) => {
    return prisma.orderItem.findMany({
        where: filter,
        orderBy: orderBy,
    });
};

// function to get orderItem by ID
const getOrderItemById = async (id) => {
    return prisma.orderItem.findUnique({where: {id:parseInt(id)}});
};

// function to create a new orderItem
const createOrderItem = async (orderItemData) => {
    return prisma.orderItem.create({
        data: orderItemData
    });
};
  
// export the functions
module.exports = {
    getAllOrderItems,
    getOrderItemById,
    createOrderItem,
};