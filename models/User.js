const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const  userSchema = new Schema({
  fullname: { type: String, required: true },
  email: {
    type: String,
    unique: true
  },
  password: {
    type: String ,
    min: [8, 'Please enter at lease 8 numbers'],
    max: 12
},
  date: { type: Date, default: Date.now }
});

const User = mongoose.model("User",  userSchema);

module.exports = User;
