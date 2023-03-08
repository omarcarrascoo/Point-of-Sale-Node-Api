const mongoose = require('mongoose');
const {Schema} = mongoose;

const cartSchema = new Schema ({
    UserId: String,
    productId: String,
    productName: String,
    productImg: String,
    productPrice: Number,
    productQuant:{
        type: Number,
        default: 1
    }
});

module.exports = mongoose.model('cart', cartSchema)