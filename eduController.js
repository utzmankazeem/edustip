const getPost = async () => {
    const resp = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=100")
    const posts = await resp.json()
    return posts;
}   

const getComment = async () => {
    const resp = await fetch("https://jsonplaceholder.typicode.com/comments?_limit=100");
    const coments = await resp.json()
    return coments;
}

module.exports = {
    getPost,
    getComment
}