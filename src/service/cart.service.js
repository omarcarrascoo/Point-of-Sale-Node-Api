const viewCartService = (req, res) =>{
    if (!session.cart) {
        req.session.cart = [];
    }
    const data = req.session.cart || []
    return data
}


module.exports ={
    viewCartService
}