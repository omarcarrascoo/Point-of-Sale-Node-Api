const Cart = require ('../models/cart.model')

const readCartItem = async (newData) => {
    const existingItem = await Cart.findOne({productName: newData.productName, UserId: newData.username})
    return existingItem
}
const createCartItem = async (newData) => {
    const item = {
        UserId: newData.username,
        productName: newData.productName,
        productImg: newData.productImg,
        productPrice: newData.productPrice,
        productId: newData.productId
    }
    const product = new Cart(item)
    await product.save()
    return product
}
const readCart = async (UserId) =>{
    const data = await Cart.find({UserId : UserId})
    return data
}
const updateCartItem = async (id, newData ) =>{
    updateData = await Cart.findByIdAndUpdate(id,{
        productQuant: newData
    },{new:true})
    return updateData
}

module.exports = {
    readCart,
    createCartItem,
    readCartItem,
    updateCartItem

}