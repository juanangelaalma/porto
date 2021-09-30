const formidable = require('formidable')
const fs = require('fs')
const bcrypt = require('bcryptjs')
const path = require('path')

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns response
 */
const uploadFile = async (req, res) => {
  const form = new formidable.IncomingForm()
  
  form.parse(req, async (err, fields, files) => {
    const oldPath = files.avatar.path

    const fileName = files.avatar.name

    const newFile = await bcrypt.hash(fileName, 10)
  
    const newFileName = newFile + Date.now() + path.extname(fileName)

    const newPath = 'public/images/' + newFileName

    fs.rename(oldPath, newPath, (err) => {
      if(err) throw err
      res.status(201).json({
        status: 'success',
        path: '/images/' + newFileName
      })
    })

  })
}

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns file image
 */
const getFile = (req, res) => {
  const { name: fileName } = req.params

  const options = {
    root: 'public/images/',
    dotfiles: 'allow',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true
    }
  }

  res.sendFile(fileName, options)
}

module.exports = { uploadFile, getFile }