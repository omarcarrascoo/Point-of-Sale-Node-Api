const { viewComments, addComment } = require("../service/comments.service")

const getComments = async(req, res) =>{
    const producto = req.body
    console.log(producto)
    req.session.comments = await viewComments(producto.productName)
    const comments = req.session.comments
    res.render('product', {data:producto, comments:comments})
}

const newComment = async(mensaje) =>{
    const comment = mensaje
    console.log(comment);
    const newComment = await addComment(comment)
    console.log(newComment)
    return newComment
}


module.exports ={
    getComments,
    newComment
}