
const Product = require ('../models/products_model.js');
const { createProductService, getAllProducts } = require('../service/product.service.js');



//GET
const viewPorducts =  (req, res, next) => {
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
    const newData = req.body
    product = await createProductService(newData);
    if (product) {
        res.redirect('/')
    } else(
        res.send('Imposible crear producto')
    )
}

const updateProduct = async (req, res, next) => {
    const existingProduct = await Product.findOne({
        productName: req.body.productName
    })
    if(existingProduct){
        res.render('updateProduct', {data: existingProduct})
    }
    else{
        setTimeout(() => {
            Product.find({}, (err, docs)=>{
                if (err) throw err;
                res.render('index', {data: docs})
            })
        }, 3000);

    }
}
const updatingProduct = async (req, res, next) =>{
    const id = req.params.id;
    try{
        const updateData = await Product.findByIdAndUpdate(id,{
            productName: req.body.productName,
            productImg: req.body.productImg,
            productCategory: req.body.productCategory,
            productPrice: req.body.productPrice,
            productStock: req.body.productStock
        },{new:true});
        res.redirect('/productos');
    }
    catch (error){
        res.render('error', {error});
    }
}
const deleteProduct = async (req, res, next) =>{
    const id = req.params.id;
    try{
        const deleteData = await Product.findByIdAndDelete(id);
        res.redirect('/productos');
    }
    catch (error){
        res.render('error', {error});
    }
}
module.exports ={
    viewPorducts,
    createProduct,
    newProduct,
    updateProduct,
    updatingProduct,
    deleteProduct
}