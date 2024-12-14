const { removeProductFromCarts } = require("./cart");
const Product = require('../db/models/product');

const createProduct = async (req, res) => {
    const product = new Product({
        name: req.body.name,
        price: req.body.price,
        category: req.body.category,
        imagUrl: req.body.imagUrl,
        desc: req.body.desc,
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

const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json({ message: "Product not found" });
        res.json(product);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const deleteProduct = async (req, res) => {
    try {
        await removeProductFromCarts(req.params.id);
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
        if (!deletedProduct) return res.status(404).json({ message: "Product not found" });
        res.json({ message: "Product deleted", product: deletedProduct });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const updateProduct = async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            {
                name: req.body.name,
                price: req.body.price,
                desc: req.body.desc,
            },
            { new: true }
        );
        if (!updatedProduct) return res.status(404).json({ message: "Product not found" });
        res.json(updatedProduct);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const searchProducts = async (req, res) => {
    try {
        const products = await Product.find({ name: { $regex: req.query.q, $options: "i" } });
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    createProduct,
    getAllProducts,
    getProductById,
    deleteProduct,
    updateProduct,
    searchProducts
    
};