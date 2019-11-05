const mongoose = require("mongoose");
// const bcrypt = require('bcryptjs');
const uuidv1 = require("uuid/v1");
const crypto = require("crypto");

const Schema = mongoose.Schema;

//create schema
const userSchema = new Schema({
  email: {
    type: String,
    lowercase: true
  },
  created: {
    type: Date,
    default: Date.now
  }
});

//model create
const Usermodel = mongoose.model("user", userSchema);

//export model
module.exports = Usermodel;
