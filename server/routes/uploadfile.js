const express = require('express')
const router = express.Router()

const { uploadFile, getFile } = require('../controllers/fileController')

router.post('/upload', uploadFile)

router.get('/images/:name', getFile)

module.exports = router