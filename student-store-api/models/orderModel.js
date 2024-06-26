const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// function that gets all the orders
const getAllOrders = async () => {
    return prisma.order.findMany({
        include: {OrderItem: true}
    });
};

// function to get order by ID
const getOrderById = async (order_id) => {
    return prisma.order.findUnique({
        include: {OrderItem: true},
        where: {order_id:parseInt(order_id)}});
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

// function to add items to an existing order
const addItem = async (order_id, orderData) => {
    const product = await prisma.product.findUnique({where: {id: orderData.product_id}});
    const order = await prisma.order.findUnique({where: {order_id: order_id}});

    await prisma.orderItem.update({
        where: {order_id: order_id},
        data: {
            total_price: parseFloat(order.total_price) + parseFloat(product.price) * parseInt(orderData.quantity)
        }
    })
    return prisma.orderItem.create({
        data: {
            order_id: parseInt(order_id),
            product_id: parseInt(orderData.product_id),
            quantity: parseInt(orderData.quantity),
            price: parseFloat(product.price) * parseInt(orderData.quantity),

        }
    });
};

// function to calculate and return the total price of an order
const getTotalPrice = async (order_id, orderData) => {
    
};

// function to delete items to an existing order
const deleteItem = async (order_id, orderData) => {
    
};
  
// export the functions
module.exports = {
    getAllOrders,
    getOrderById,
    createOrder,
    updateOrder,
    deleteOrder,
    addItem,
    getTotalPrice,
    deleteItem,
};