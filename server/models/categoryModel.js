const mongoose = require("mongoose");
const { Schema } = mongoose;

const CategoriesSchema = Schema({
  _id: String,
  name: String,
});

const Categories = mongoose.model("categories", CategoriesSchema);

module.exports = { Categories, CategoriesSchema };
