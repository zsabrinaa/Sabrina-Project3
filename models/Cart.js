const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const  cartSchema = new Schema({
  user_id: {type: mongoose.Schema.Types.ObjectId, ref: 'user'},
  date: { type: Date, default: Date.now }
});

const Cart= mongoose.model("Cart",  cartSchema);

module.exports = Cart;
