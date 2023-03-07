const {readProduct, createProduct, readAll } = require('../DAOS/product.dao.js');
// class productService {
//     constructor(){
//         this.productoDAOs = new ProductoDAOsMongo()
//     }
// }
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

module.exports = {
    createProductService, getAllProducts
}