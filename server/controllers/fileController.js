const formidable = require("formidable");
const fs = require("fs");
const bcrypt = require("bcryptjs");
const path = require("path");

/**
 *
 * @param {*} req
 * @param {*} res
 * @returns response
 */
const uploadFile = async (req, res) => {
  const form = new formidable.IncomingForm();

  try {
    form.parse(req, async (err, fields, files) => {
      const fileName = files.thumbnail.name;
      const newFileName = Date.now() + path.extname(fileName);
      const oldPath = files.thumbnail.path
      const newPath = "public/images/" + newFileName;

      fs.rename(oldPath, newPath, (err) => {
        if (err) throw err;
        res.status(201).json({
          status: "success",
          path: "/images/" + newFileName,
        });
      });
    });
  } catch (err) {
    res.status(500).send(err);
  }
};

/**
 *
 * @param {*} req
 * @param {*} res
 * @returns file image
 */
const getFile = (req, res) => {
  const { name: fileName } = req.params;

  const options = {
    root: "public/images/",
    dotfiles: "allow",
    headers: {
      "x-timestamp": Date.now(),
      "x-sent": true,
    },
  };

  res.sendFile(fileName, options);
};

module.exports = { uploadFile, getFile };
