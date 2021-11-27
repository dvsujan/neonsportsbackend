const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CartSchema = new Schema({
    Items: {
        type: Array,
    }
}, { timestamps: true });

const Cart = mongoose.model('Cart', CartSchema);
module.exports = Cart;