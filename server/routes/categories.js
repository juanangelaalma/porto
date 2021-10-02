const express = require("express");
const router = express.Router();
const {
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/categoryController");

// middleware
const verifyToken = require('../middlewares/auth')

/**
 * @parent /categories
 */

// get all categories
router.get("/", getCategories);

// add a category
router.post("/", verifyToken, createCategory);
// update a category
router.put("/:id", verifyToken, updateCategory);
// delete a category
router.delete("/:id", verifyToken, deleteCategory);

module.exports = router;
