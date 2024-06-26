require("dotenv").config()
const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");

const productRoutes = require("../routes/productRoutes");
const orderRoutes = require("../routes/orderRoutes");
const orderItemRoutes = require("../routes/orderItemRoutes");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

// implement CRUD (Create, Read, Update, Delete) operations for the Product and Order models

// add product routes here
app.use("/products", productRoutes);

// add order routes here
app.use("/orders", orderRoutes);

// add orderItem routes here
app.use("/orderItem", orderItemRoutes);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});