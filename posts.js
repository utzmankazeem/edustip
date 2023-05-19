const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
    postId: {
        type: String
    },
    id: {
        type: Number
    },
    name: {
        type: String
    },
    email: {
        type: String
    },
    body: {
        type: String
    }
})

const post = mongoose.moedel("Post", postSchema);
module.exports = post;
