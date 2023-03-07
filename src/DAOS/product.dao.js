const Product = require ('../models/products_model.js');

const readProduct = async (newData) => {
    const existingProduct = await Product.findOne({productName: newData.productName})
    return existingProduct
}

const createProduct = async (newData) =>{
    const product = new Product(newData)
    await product.save()
    return product
}

const readAll = async () =>{
    const data = await Product.find()
    return data
}

module.exports = {
    readProduct,
    createProduct,
    readAll
}