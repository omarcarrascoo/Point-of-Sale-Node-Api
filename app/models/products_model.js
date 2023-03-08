const mongoose = require('mongoose');
const {Schema} = mongoose;

const productSchema = new Schema ({
    productName: String,
    productImg: String,
    productCategory: String,
    productPrice: Number,
    productStock: Number
});

module.exports = mongoose.model('products', productSchema)