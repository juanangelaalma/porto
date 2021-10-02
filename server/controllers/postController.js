const { Categories } = require("../models/categoryModel");
const Posts = require("../models/postModel");
const slugify = require("../utils/slugify");

const getPosts = async (req, res) => {
  try {
    const posts = await Posts.find();
    res.status(200).json(posts);
  } catch (err) {
    console.log(err);
  }
};

const getPostBySlug = async (req, res) => {
  try {
    const { slug } = req.params;

    const post = await Posts.findOne({ slug });

    if (!post) {
      return res.status(404).json({ message: "post not found" });
    }

    res.status(200).json(post);
  } catch (err) {
    console.log(err);
  }
};

const getPostsByCategory = async (req, res) => {
  try {
    const { id: categoryId } = req.params;

    const category = await Categories.findOne({ _id: categoryId })

    const posts = await Posts.find({ category });

    res.status(200).json(posts);
  } catch (err) {
    console.log(err);
  }
};

const createPost = async (req, res) => {
  try {
    const { title, body, image, category: currentCategory, tags } = req.body;

    const oldPost = await Posts.findOne({ title });
    console.log(oldPost);

    if (oldPost) {
      return res.status(401).json("title is use by another post");
    }

    const slug = slugify(title);
    const status = "drafted";
    const created_at = Date.now();
    const updated_at = created_at;
    const category = new Categories(currentCategory);

    const newPost = {
      title,
      body,
      image,
      slug,
      category,
      tags,
      status,
      created_at,
      updated_at,
    };

    const post = new Posts(newPost);

    await post.save();

    res.status(201).json(post);
  } catch (err) {
    console.log(err);
  }
};


const updatePost = async (req, res) => {
  const { slug: oldSlug } = req.params
  const { title, body, image, category_id, tags, status } = req.body

  console.log(title, body, image, category_id, tags, status)

  if(!(title && body && image && category_id && tags && status)) {
    return res.status(400).json({ message: "all fields is required" })
  }

  const updated_at = Date.now()

  const currentSlug = slugify(title)

  const category = await Categories.findOne({ _id: category_id })

  const currentPost = { title, body, image, slug: currentSlug, category, tags, status, updated_at }

  const post = await Posts.updateOne({ slug: oldSlug }, currentPost)

  res.status(200).json({ message: "post updated successfully" })
};

const deletePost = async (req, res) => {
  const { slug } = req.params

  const post = await Posts.deleteOne({ slug })

  if(!(post.deletedCount)) {
    return res.status(404).json({ message: "post not found" })
  }

  res.status(200).json({ message: "post removed successgully" })
};

module.exports = {
  getPosts,
  getPostBySlug,
  getPostsByCategory,
  createPost,
  updatePost,
  deletePost
};
