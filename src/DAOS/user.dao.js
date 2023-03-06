const User = require('../models/user')
const findUser = (user) =>[
    User.findOne(user)
]
const createUser = () => {
    new User()
} 
const saveUser = (user) =>{
    user.save()
}
module.exports ={
    findUser,
    createUser,
    saveUser
}