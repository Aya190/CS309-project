const Order = require('../db/models/order');

const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find().populate('userId').populate('cartId');
        res.json(orders);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const createOrder = async (req, res) => {
    const order = new Order({
        userId: req.body.userId,
        cartId: req.body.cartId,
        status: req.body.status
    });
    try {
        const newOrder = await order.save();
        res.status(201).json(newOrder);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

module.exports = {
    getAllOrders,
    createOrder
};
