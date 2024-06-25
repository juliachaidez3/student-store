const express = require("express");
const app = express();
const port = 3000;
const productRoutes = require("../routes/productRoutes");

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

// implement CRUD (Create, Read, Update, Delete) operations for the Product model

// add product routes here
app.use("/products", productRoutes);

app.listen(port, ()=>{
    console.log(`Server is running at http://localhost:${port}`);
});