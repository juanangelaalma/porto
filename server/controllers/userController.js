const Users = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")
/**
 *
 * @param {*} req
 * @param {*} res
 * @returns response
 */
const registerUser = async (req, res) => {
  try {
    const { username, password, email, name, avatar } = req.body;

    // ? check all fileds is not null
    if (!(username && password && email && name && avatar)) {
      return res.status(400).send("all fields is required");
    }

    
    const oldUser = await Users.findOne({ email });
    
    // ? check if email is already used
    if (oldUser) {
      return res.status(401).send("email is already in use by another user");
    }
    
    const encryptedPassword = await bcrypt.hash(password, 10)

    const newData = { username, password: encryptedPassword, email, name, avatar };

    // * create new users
    const user = new Users(newData);

    const token = jwt.sign(
      { user_id: user._id, email },
      process.env.TOKEN_KEY,
      { expiresIn: "48h" }
    )

    user.token = token
    
    // * save new user
    await user.save();
    res.status(201).send(user);
  } catch (err) {
    console.log(err);
  }
};

const loginUser = async (req, res) => {
  try{
    const { email, password } = req.body

    if(!(email && password)) {
      res.status(400).send({
        message: "All input is required!"
      })
    }

    // find user by email
    const user = await Users.findOne({ email })

    if(!(user && (await bcrypt.compare(password, user.password)))) {
      res.status(400).json({
        message: "invalid Cradentials"
      })
    }
    // create token
    const token = jwt.sign(
      { user_id: user._id, email },
      process.env.TOKEN_KEY,
      { expiresIn: "48h" }
    )

    console.log(token)

    // save user token
    user.token = token
    res.status(201).json(user)
  }catch(err) {
    console.log(err)
  }
};

module.exports = { registerUser, loginUser };
