const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const OrderSchema = new Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    cartId: { type: mongoose.Schema.Types.ObjectId, ref: 'Cart', required: true },
    status: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', OrderSchema);
