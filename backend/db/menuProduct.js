const MenuProduct = require('../db/models/menuProduct');

const createMenuProduct = async (req, res) => {
    const menuProduct = new MenuProduct({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        available: req.body.available
    });
    try {
        const newMenuProduct = await menuProduct.save();
        res.status(201).json(newMenuProduct);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const getAllMenuProducts = async (req, res) => {
    try {
        const menuProducts = await MenuProduct.find();
        res.json(menuProducts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    createMenuProduct,
    getAllMenuProducts
};