const mongoose= require("mongoose");
const bcrypt = require('bcrypt')
const {Schema } = mongoose;


const userSchema = new Schema({
    username: String,
    password: String,
    userType:{
        type: Number,
        default: 1
    }
});

userSchema.methods.encryptPassword = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10))
}
userSchema.methods.comparePassword = function(password){
    return bcrypt.compareSync(password, this.password)
}

module.exports = mongoose.model('users',userSchema);