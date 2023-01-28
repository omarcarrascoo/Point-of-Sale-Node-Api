const Product = require ('../models/products_model.js')



//GET
const viewPorducts =  (re, res, next) => {
    Product.find({}, (err, docs)=>{
        if (err) throw err;
        res.render('index', {data: docs})
    })
}
const newProduct = (req, res, next) => {
    res.render('newProduct')
} 
//POST
const createProduct = async (req, res, next ) =>{
    const existingProduct = await Product.findOne({
        productName: req.body.nameProduct
    })
    if (existingProduct) {
        res.send('Producto en existencia')
    }else{
        const product = new Product({
            productName: req.body.nameProduct,
            productImg: req.body.imgProduct,
            productCategory: req.body.categoryProduct,
            ProductPrice: req.body.priceProduct,
            productStock: req.body.stockProduct
        })
        await product.save()
        if (product) {
            Product.find({}, (err, docs)=>{
                if (err) throw err;
                res.render('index', {data: docs})
            })
        }else(
            res.send('Imposible crear product')
        )
    }
    
}
module.exports ={
    viewPorducts,
    createProduct,
    newProduct
}