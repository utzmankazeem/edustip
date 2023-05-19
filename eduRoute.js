const express = require("express");
const router = express.Router();
const {getPost, getComment} = require("./eduController")

router.get("/api/posts", getPost);
router.get("/api/comments", getComment);

module.exports = router;