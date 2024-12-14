const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CartSchema = new Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true }],
    quantity: { type: Number, required: true },
    total: { type: Number, required: true }
});

module.exports = mongoose.model('Cart', CartSchema);
