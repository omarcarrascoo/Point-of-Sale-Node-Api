const { readComments, createComment } = require("../DAOS/comments.dao")

const viewComments = async (productName) =>{
    return readComments(productName)

}
const addComment = async (comment) =>{
    const data = await createComment(comment)
    return  data;
}

module.exports = {
    viewComments,
    addComment
}