const viewCart = (req, res) => {
  if (!req.session.cart) {
    req.session.cart = [];
  }
  const data = req.session.cart
  res.render('cart', {data})
}

const addCart = (req, res) => {
  const item = req.body;
  if (!req.session.cart) {
    req.session.cart = [];
  }
  req.session.cart.push(item);
  res.redirect('/')
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