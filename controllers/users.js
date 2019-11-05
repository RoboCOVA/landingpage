const JWT = require("jsonwebtoken");
const uuidv1 = require("uuid/v1");
const crypto = require("crypto");

const Usermodel = require("../models/user");

module.exports = {
  registerTosubscriber: async (req, res, next) => {
    const { email } = req.value.body;

    //check if email already exists
    const Emailisexist = await Usermodel.findOne({ email: email });
    if (Emailisexist) {
      return res.status(403).json({ error: "The email is already exists" });
    }

    const newUser = new Usermodel({
      email: email
    });
    await newUser.save();

    res.json("confirm");
  },
  teset: async (req, res, next) => {
    res.json({ msg: "test" });
  }
};
