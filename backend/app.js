const express = require("express");
const mongoose = require('mongoose');
const User = require ('./db/models/user');
const cors = require("cors");


const products = require("./router/product/product");
const { router: upload } = require("./router/upload/upload");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use("/product", product);
app.use("/upload", upload);