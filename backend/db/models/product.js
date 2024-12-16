const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    imagUrl: { type: String, default: true }
});

productSchema.index({ name: "text", "product.name": "text" });
productSchema.index({ name: "text", "product.desc": "text" });

module.exports = mongoose.model('Product', ProductSchema);
