const { default: mongoose } = require("mongoose");
const bcrypt = require(bcrypt)
const { schema } = require("normalizr");


new schema({
    user: String,
    password: String
});

userSchema.methods.encryptPassword = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10))
}

module.exports = mongoose.model('users',userSchema);