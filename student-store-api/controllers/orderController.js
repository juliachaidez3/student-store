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

// export the function
module.exports = {
    getAllOrders,
    getOrderById,
    createOrder,
    updateOrder,
    deleteOrder,
};