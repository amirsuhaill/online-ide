let mongoose = require('mongoose');

const  dotenv= require('dotenv')
dotenv.config()

mongoose.connect(process.env.MONGODB_URL);

let userSchema = new mongoose.Schema({
  name: String,
  username: String,
  email: String,
  password: String,
  date:{
    type: Date,
    default: Date.now
  },
  isBlocked: {
    type: Boolean,
    default: false
  },
  isAdmin: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('User', userSchema); // 'User' is the name of the collection