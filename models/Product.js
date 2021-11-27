const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const strreq = {
    type: String,
    require: true,
}

const strtep = {
    type: String,
    require: true,
    unique: true,
    es_indexed: true
}

const ProductSchema = new Schema({

    name: strreq,
    price: strreq,
    description: strreq,
    ProductImage: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    category: {
        type: String,
        enum: ['Electronics', 'Fashion', 'Food', 'Home', 'Sports', 'Others'],
        default: 'Others'
    },
}, { timestamps: true });

const Products = mongoose.model('Products', ProductSchema);
module.exports = Products;