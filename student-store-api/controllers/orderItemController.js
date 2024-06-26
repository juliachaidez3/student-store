// import orderItemModel
const orderItemModel = require("../models/orderItemModel");

// function that gets all the orderItems
const getAllOrderItems = async (req, res) => {
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
        const orderItem = await orderItemModel.getAllOrderItems(filter, orderBy);
        res.status(200).json(orderItem);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

// function to get orderItem by ID
const getOrderItemById = async (req, res) => {
    try {
       const orderItem = await orderItemModel.getOrderItemById(req.params.id);
       if (orderItem) {
        res.status(200).json(orderItem);
       } else {
        res.status(404).json({error: "OrderItem not found"});
       }
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

// function to create a new orderItem
const createOrderItem = async (req, res) => {
    try {
        const newOrderItem = await orderItemModel.createOrderItem(req.body);
        res.status(201).json(newOrderItem);

    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

// export the function
module.exports = {
    getAllOrderItems,
    getOrderItemById,
    createOrderItem
};