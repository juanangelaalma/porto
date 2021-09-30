const mongoose = require('mongoose')
const { Schema } = mongoose


const UsersSchema = Schema({
  username: String,
  password: String,
  email: String,
  name: String,
  avatar: String,
  token: String
})

const Users = mongoose.model('users', UsersSchema)

module.exports = Users