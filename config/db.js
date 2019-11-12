const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
  try {
    //await mongoose.connect(db, {
       await mongoose.connect(process.env.DB, {
      useNewUrlParser: true,
      useCreateIndex: true
    });

    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err.message);
    //Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
