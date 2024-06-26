const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");

// get all the orders
router.get("/", orderController.getAllOrders);

// get order by ID
router.get("/:id", orderController.getOrderById);

// add a new order
router.post("/", orderController.createOrder);

// update a order
router.put("/:id", orderController.updateOrder);

// delete a order
router.delete("/:id", orderController.deleteOrder);

// add item to existing order
router.post("/:order_id/items", orderController.addItem);

// delete item from existing order
router.delete("/:order_id/items/:/order_item_id", orderController.deleteItem);

// calculate the total price based on the order items
router.get("/:order_id/total", orderController.getTotalPrice);

module.exports = router;