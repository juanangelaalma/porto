const { Categories } = require('../models/categoryModel')
const bcrypt = require('bcryptjs')

const getCategories = async (req, res) => {
  try {
    const categories = await Categories.find()

    res.status(200).json({ categories })
  } catch(err) {
    console.log(err)
  }
}

const createCategory = async (req, res) => {
  try {
    const { name } = req.body

    if(!name) {
      return res.status(400).json({ message: 'All fields is required' })
    }

    const _id = await bcrypt.hash(Date.now() + name, 5)

    const category = new Categories({ _id, name })

    await category.save()

    res.status(201).json({ category })
  }catch(err) {
    console.log(err)
  }
}

const updateCategory = async (req, res) => {
  const { id: _id } = req.params
  const { name } = req.body

  if(!name) {
    return res.status(400).json({ message: 'All fields is required' })
  }

  const category = await Categories.updateOne({ _id }, { name })

  res.status(201).json({ message: 'category updated successfully' })
}

const deleteCategory = async (req, res) => {
  const { id: _id } = req.params

  const category = await Categories.deleteOne({ _id })

  if(!(category.deletedCount)){
    return res.status(404).json({ message: "category not found" })
  }

  res.status(201).json({ message: 'category removed successfully' })
}

module.exports = { getCategories, createCategory, updateCategory, deleteCategory }