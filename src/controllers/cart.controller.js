const { addItemCart, getCart } = require("../service/cart.service");

const viewCart = (req, res) => {
  const user = req.user
  if (user) {
    const cart = getCart(user.username) 
    console.log(cart);
    res.render('cart',{data: cart})
  } else {
    if (!req.session.cart) {
      req.session.cart = [];
    }
    const data = req.session.cart
    console.log(data);
    res.render('cart', {data})
  }
}

const addCart = (req, res) => {
  const item = req.body;
  const user = req.user
  if (user) {
    addItemCart(item)
    res.redirect('/')
  } else {
    const item = req.body;
    if (!req.session.cart) {
      req.session.cart = [];
    }
    req.session.cart.push(item);
    res.redirect('/')
  }
}

const delateCart = (req, res) => {
  var productId = req.params.id;
  if (req.session.cart) {
    req.session.cart = req.session.cart.filter(function (product) {
      return product.productId != productId;
    });
  }
  res.redirect('/cart');
}
module.exports = {
  viewCart,
  addCart,
  delateCart
}