const Product = require ('../models/products_model.js');

const readProduct = async (newData) => {
    const existingProduct = await Product.findOne({productName: newData.productName})
    return existingProduct
}
const findProduct = async (id) =>{
    console.log(id);
    const products = await Product.findById(id)
    return products
}
const readCategory = async (newData) =>{
    const category = await Product.find({productCategory: newData});
    return category
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
const updateById = async(id, data) =>{
    const upDateData = await Product.findByIdAndUpdate(id, data , {
        new: true
    });
    return upDateData
}
const delateById = async (id) =>{
    const delatedData = await Product.findByIdAndDelete(id);
    return delatedData
}
module.exports = {
    readProduct,
    createProduct,
    readAll,
    readCategory,
    findProduct,
    updateById,
    delateById
}