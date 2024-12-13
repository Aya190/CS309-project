const Product = require('../db/models/product');

const createProduct = async (req, res) => {
    const product = new Product({
        name: req.body.name,
        price: req.body.price,
        category: req.body.category,
        imagUrl: req.body.imagUrl
    });
    try {
        const newProduct = await product.save();
        res.status(201).json(newProduct);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    createProduct,
    getAllProducts
    
};