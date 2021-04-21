const express = require('express');
const products = require('./routes/product');
const category = require('./routes/category');

const port = 4000;
const app = express();
app.use(express.json());

app.use("/api/products", products);
app.use("/api/category", category);


app.listen(port, (err) => {
    if (err) {
        console.log(`Error in running server on port ${port}`)
    }
    console.log(`Server is up and running on port ${port}`)
})