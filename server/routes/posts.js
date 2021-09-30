const express = require("express");
const router = express.Router();

const {
  getPosts,
  getPostBySlug,
  getPostsByCategory,
  createPost,
  updatePost,
  deletePost
} = require("../controllers/postController");

/**
 * @parent /posts
 */

// getting all posts
router.get("/", getPosts);
// get a post
router.get("/:slug", getPostBySlug);
// get posts by category
router.get("/categories/:id", getPostsByCategory);

// create a post
router.post("/", createPost);
// update a post
router.put("/:slug", updatePost);
// delete a post
router.delete("/:slug", deletePost);

module.exports = router;
