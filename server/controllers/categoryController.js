const { Categories } = require('../models/categoryModel')

const getCategories = async (req, res) => {
  res.send('categori')
}

const createCategory = async (req, res) => {
  res.send('post category')
}

const updateCategory = async (req, res) => {
  res.send('update category')
}

const deleteCategory = async (req, res) => {
  res.send('delete category')
}

module.exports = { getCategories, createCategory, updateCategory, deleteCategory }