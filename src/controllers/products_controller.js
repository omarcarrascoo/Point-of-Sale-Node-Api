const Product = require('../models/products_model.js');
const {
    createProductService,
    getAllProducts,
    getCategory,
    findProductId,
    upDateProductById,
    delatePorductById
} = require('../service/product.service.js');


//GET
const viewPorducts = async (req, res, next) => {
    try {
        const data = await getAllProducts()
        res.render('index', {
            data: data
        })
    } catch (error) {
        console.error(error);
        res.status(500)
    }
}
const newProduct = (req, res, next) => {
    res.render('newProduct')
}
const viewCategory = async (req, res) => {
    try {
        const category = req.params.category;
        const data = await getCategory(category);
        res.render('index', {
            data: data
        })
    } catch (error) {
        console.log(error);
        res.status(500)
    }
}
//POST
const createProduct = async (req, res, next) => {
    const newData = req.body
    product = await createProductService(newData);
    if (product) {
        res.redirect('/')
    } else(
        res.send('Imposible crear producto')
    )
}

const updateProduct = async (req, res, next) => {
    try {
        const existingProduct = await findProductId(req.params.id)
        res.render('updateProduct', {
            data: existingProduct
        })
    } catch (error) {
        console.log(error)
        res.render('error',{
            error
        })
    }
}
const updatingProduct = async (req, res, next) => {
    const id = req.params.id;
    const data = req.body
    try {
        const updateProduct  = await upDateProductById(id, data)
        console.log(updateProduct)
        res.redirect('/productos');
    } catch (error) {
        console.log(error)
        res.render('error', {
            error
        });
    }
}
const deleteProduct = async (req, res, next) => {
    const id = req.params.id;
    try {
        const delateProduct = delatePorductById(id)
        res.redirect('/productos');
    } catch (error) {
        res.render('error', {
            error
        });
    }
}
module.exports = {
    viewPorducts,
    createProduct,
    newProduct,
    updateProduct,
    updatingProduct,
    deleteProduct,
    viewCategory
}