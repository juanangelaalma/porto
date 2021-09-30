const express = require('express')
const Users = require('../models/userModel')
const { registerUser, loginUser } = require('../controllers/userController')

const router = express.Router()

// /users
router.post('/login', loginUser)

router.post('/register', registerUser)

module.exports = router