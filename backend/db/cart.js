const Cart = require('../db/models/cartitem');

const getCartByUserId = async (req, res) => {
    try {
        const cart = await Cart.findOne({ userId: req.params.userId }).populate('products');
        res.json(cart);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const addToCart = async (req, res) => {
    const { userId, productId, quantity, total } = req.body;
    const cart = new Cart({
        userId,
        products: [productId],
        quantity,
        total
    });
    try {
        const newCart = await cart.save();
        res.status(201).json(newCart);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

module.exports = {
    getCartByUserId,
    addToCart
};
