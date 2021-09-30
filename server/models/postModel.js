const mongoose = require('mongoose')
const { Schema } = mongoose

const { CategoriesSchema } = require('./categoryModel')

const PostsSchema = Schema({
  title: String,
  body: String,
  image: String,
  slug: String,
  category: CategoriesSchema,
  tags: [String],
  status: { type: String, enum: ["published", "drafted"], default: 'drafted' },
  created_at: { type: Date, default: Date.now() },
  updated_at: { type: Date, default: Date.now() }
})

const Posts = mongoose.model('posts', PostsSchema)

module.exports = Posts