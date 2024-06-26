// import orderModel
const orderModel = require("../models/orderModel");

// function that gets all the orders
const getAllOrders = async (req, res) => {
    const { category, name, price } = req.query;
    let filter = {}; // filter object
    let orderBy = {}; // order by asc or desc

    // add desired category to filter list
    if (category) {
        filter.category = category;
    }
    
    // sort alphabetically
    if (name) orderBy = { name: name === "asc" ? "asc" : "desc" };

    // sort by price, either asc or des
    if (price) orderBy = { price: price === "asc" ? "asc" : "desc"};

    try {
        const orders = await orderModel.getAllOrders(filter, orderBy);
        res.status(200).json(orders);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

// function to get order by ID
const getOrderById = async (req, res) => {
    try {
       const order = await orderModel.getOrderById(req.params.id);
       if (order) {
        res.status(200).json(order);
       } else {
        res.status(404).json({error: "Order not found"});
       }
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

// function to create a new order
const createOrder = async (req, res) => {
    try {
        const newOrder = await orderModel.createOrder(req.body);
        res.status(201).json(newOrder);

    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

// function to update a order
const updateOrder = async (req, res) => {
    try {
        const updateOrder = await orderModel.updateOrder(req.params.id, req.body);
        if (updateOrder) {
            res.status(200).json(updateOrder);
        } else {
            res.status(404).json({ error: "Order not found" });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// function to delete a order
const deleteOrder = async (req, res) => {
    try {
        const deleteOrder = await orderModel.deleteOrder(req.params.id);
        if (deleteOrder) {
            res.status(200).json(deleteOrder);
        } else {
            res.status(404).json({ error: "Order not found" });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// function to add items to an existing order
const addItem = async (req, res) => {
    try {
        const orderItem = await orderModel.addItem(req.params.order_id, req.body);
        res.json(orderItem);
    } catch(error) {
        console.error("Error adding item to order:", error);
        res.status(500).json({error: "Internal server error"});
    }
};

// function to calculate and return the total price of an order
const getTotalPrice = async (req, res) => {

};

// function to delete items to an existing order
const deleteItem = async (req, res) => {
    try {
        const orderItem = await orderModel.deleteItem(req.params.order_id, req.params.order_item_id);
        res.json(orderItem);
    } catch(error) {
        console.error("Error deleting item to order:", error);
        res.status(500).json({error: "Internal server error"});
    }
};

// export the function
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