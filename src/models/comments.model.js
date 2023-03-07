const mongoose= require("mongoose");
const {Schema } = mongoose;


const commentsSchema = new Schema({
    author: String,
    text: String,
    productName: String
});


module.exports = mongoose.model('comments',commentsSchema);