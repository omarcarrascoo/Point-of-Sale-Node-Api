const Product = require ('../models/products_model.js');

const readProduct = async (newData) => {
    const existingProduct = await Product.findOne({productName: newData.productName})
    console.log(`dentro: ${existingProduct}`);
    return existingProduct
}

const createProduct = async (newData) =>{
    const product = new Product(newData)
    await product.save()
    return product
}

const readAll = async () =>{
    const data = await Product.find()
    console.log(data);
    return data
}

module.exports = {
    readProduct,
    createProduct,
    readAll
}