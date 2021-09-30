const express = require("express");
const router = express.Router();
const {
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/categoryController");

/**
 * @parent /categories
 */

// get all categories
router.get("/", getCategories);

// add a category
router.post("/", createCategory);
// update a category
router.put("/:id", updateCategory);
// delete a category
router.delete("/:id", deleteCategory);

module.exports = router;
