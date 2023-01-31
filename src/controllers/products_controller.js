
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
            productPrice: req.body.priceProduct,
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
            productName: req.body.nameProduct,
            productImg: req.body.imgProduct,
            productCategory: req.body.categoryProduct,
            productPrice: req.body.priceProduct,
            productStock: req.body.stockProduct
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