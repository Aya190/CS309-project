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
const removeFromCart = async (req, res) => {
    const { userId, productId } = req.body;

    try {
        let cart = await Cart.findOne({ userId });

        if (cart) {
            cart.products = cart.products.filter(p => p.productId.toString() !== productId);
            cart.total = cart.products.reduce((sum, item) => sum + item.quantity * item.price, 0);

            cart = await cart.save();
            res.status(200).json(cart);
        } else {
            res.status(404).json({ message: 'Cart not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
const removeCart = async (req, res) => {
    const { userId } = req.body;

    try {
        const cart = await Cart.findOneAndDelete({ userId });
        if (cart) {
            res.status(200).json({ message: 'Cart deleted' });
        } else {
            res.status(404).json({ message: 'Cart not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
const getCartItemById = async (req, res) => {
    try {
        const cartItem = await Cart.findOne({ "products._id": req.params.itemId }, { "products.$": 1 });
        if (!cartItem) return res.status(404).json({ message: 'Cart item not found' });
        res.json(cartItem.products[0]);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
module.exports = {
    getCartByUserId,
    addToCart,
    removeFromCart,
    removeCart,
    getCartItemById
};
