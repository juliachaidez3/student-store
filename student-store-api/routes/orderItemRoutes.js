const express = require("express");
const router = express.Router();
const orderItemController = require("../controllers/orderItemController");

// get all the orderItems
router.get("/", orderItemController.getAllOrderItems);

// get orderItem by ID
router.get("/:id", orderItemController.getOrderItemById);

// add a new orderItem
router.post("/", orderItemController.createOrderItem);

module.exports = router;