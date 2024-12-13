const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MenuProductSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    available: { type: Boolean, default: true },
    imagUrl:{ type:String,required: true}
});

module.exports = mongoose.model('MenuProduct', MenuProductSchema);