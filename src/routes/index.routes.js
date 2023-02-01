const express = require('express');
const router = express.Router();
const compression = require('compression');
const {watchInfo, randomNumGenerator, watchIndex} = require('../controllers/info_controller');
const { renderSignUp, userSignUp, renderLogin, userLogin, userLogout } = require('../controllers/user_controler');
const { viewPorducts, createProduct, newProduct, updateProduct, updatingProduct, deleteProduct } = require('../controllers/products_controller');
const { isAuthenticated } = require('../middlewares/auth.Middleware');


//GENERAL
router.get('/', watchIndex );
router.get('/info', watchInfo);
router.get('/random:num',compression(), randomNumGenerator)



//USERS ROUTES
router.get('/signup', renderSignUp  )
router.post('/signup', userSignUp  )
router.get('/login', renderLogin )
router.post('/login', userLogin)
router.get('/logout', userLogout )

//PRODUCTS ROUTES
router.get('/productos', isAuthenticated, compression(), viewPorducts)
router.get('/newProduct', isAuthenticated, newProduct)
router.post('/newProduct', isAuthenticated, createProduct)
router.post('/updateProduct', isAuthenticated,updateProduct )
router.post('/update/:id', isAuthenticated, updatingProduct)
router.post('/deleteProduct/:id', isAuthenticated, deleteProduct)


module.exports = router;