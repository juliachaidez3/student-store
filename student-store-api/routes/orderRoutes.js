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

// Add Items to Order Endpoint
// Create a new endpoint (e.g., POST /orders/:order_id/items) to add items to an existing order.
// Update the Order and Order Item models to handle adding items to an order.





// Calculate Order Total Endpoint
// Create a new endpoint (e.g., GET /orders/:order_id/total) to calculate and return the total price of an order.
// Update the Order model to include a method for calculating the total price based on the order items.

module.exports = router;