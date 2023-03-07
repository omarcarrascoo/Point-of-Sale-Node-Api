const Comments = require('../models/comments.model')

const createComment = async (msg) => {
    const data = msg
    const comment = new Comments(data)
    await comment.save()
    return comment
}
const readComments = async (productName) => {
    const data = await Comments.find({productName : productName})
    return data;
}

module.exports = {
    createComment,
    readComments
}