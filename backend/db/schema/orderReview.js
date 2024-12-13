const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderReviewSchema = new mongoose.Schema({
    orderId: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true }
});

module.exports = mongoose.model('OrderReview', OrderReviewSchema);