const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MenuProductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    available: { type: Boolean, default: true }
});

module.exports = mongoose.model('MenuProduct', MenuProductSchema);