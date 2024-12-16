const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
const products = require("./router/product/product");
const { router: user } = require("./router/user/user");
const { router: upload } = require("./router/upload/upload");
const app = express();


mongoose.set("strictQuery", false)
mongoose
.connect("mongodb://localhost:27017/CS309-project")
.then(() => {
    console.log('connected to MongoDB')
    
    app.listen(3000, () => console.log('app started on port 3000'))
}).catch((error) => {
    console.log('cant connect to mongodb'+error)
});


app.use("/products", products);
app.use("/user" , user);
app.use("/upload", upload);