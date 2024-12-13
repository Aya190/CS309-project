const OrderReview = require('../db/models/orderReview');

const createReview = async (req, res) => {
    const orderReview = new OrderReview({
        orderId: req.body.orderId,
        userId: req.body.userId,
        rating: req.body.rating,
        comment: req.body.comment
    });
    try {
        const newReview = await orderReview.save();
        res.status(201).json(newReview);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
const getReviewsByOrderId = async (req, res) => {
    try {
        const reviews = await OrderReview.find({ orderId: req.params.orderId }).populate('userId');
        res.json(reviews);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    createReview,
    getReviewsByOrderId
};