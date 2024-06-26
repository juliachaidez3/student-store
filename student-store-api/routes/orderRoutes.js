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

module.exports = router;