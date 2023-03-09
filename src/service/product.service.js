const {readProduct, createProduct, readAll, readCategory, findProduct, updateById, delateById } = require('../DAOS/product.dao.js');;

const createProductService = async (newData) => {
    const existingProduct = await readProduct(newData)
    if (existingProduct) {
        return false
    } else {
       const product = await createProduct(newData);
       return product;
    }
}
const getAllProducts = () => {
    const data = readAll()
    if (data) {
        return data
    }
    else{
        return false
    }
}
const getCategory = async (data) =>{
    try {
        const category = await readCategory(data)
        console.log(category)
        return category
    } catch (error) {
        console.error(error);
        return error
    }
}
const findProductId = async (id) =>   {
    try {
        const product = await findProduct(id);
        return product
    } catch (error) {
        console.error(error);
        return(error)
    }
}
const upDateProductById = async (id, data) =>{
    const sendData = {
        productName: data.productName,
        productImg: data.productImg,
        productCategory: data.productCategory,
        productPrice: data.productPrice,
        productStock: data.productStock
    }
    const upDateData = await updateById(id, sendData)
    return upDateData
}
const delatePorductById = async (id)=>{
    const productDelated = await delateById(id)
    return productDelated

}

module.exports = {
    createProductService, getAllProducts,getCategory,findProductId,
    upDateProductById,
    delatePorductById
}