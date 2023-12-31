const express = require('express');
const { authGuard, adminGuard } = require('../middleware/authMiddleware');
const { createPost, updatePost, deletePost, getPost, getAllPosts } = require('../controllers/postControllers');
const router = express.Router();


router.route("/").post(authGuard, adminGuard, createPost).get(getAllPosts);
//router.post("/", authGuard, adminGuard, createPost);
router
    .route("/:slug")
    .put(authGuard, adminGuard, updatePost)
    .delete(authGuard, adminGuard, deletePost)
    .get(getPost)

module.exports = router;