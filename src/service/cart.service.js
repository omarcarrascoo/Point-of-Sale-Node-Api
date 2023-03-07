const { readCartItem, createCartItem, readCart, updateCartItem } = require("../DAOS/cart.dao");

const addItemCart = async (newData) => {
    const existingProduct = await readCartItem(newData)
    if (existingProduct) {
        const newData = 1 + existingProduct.productQuant;
        return updateCartItem (existingProduct._id, newData )

    } else {
        const product = await createCartItem(newData)
        return product
    }
}
const getCart = (UserId)=>{
    const data = readCart(UserId)
    if(data){
        return data
    }else {
        return false
    }
}
const sumCart = (data) => {
    console.log(data)
    let totalPrice = 0;
    for (let i = 0; i < data.length; i++) {
     totalPrice += parseFloat(data[i].productPrice);
        }
    return totalPrice
}

module.exports = {
    addItemCart,
    getCart,
    sumCart
}