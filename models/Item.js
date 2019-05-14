const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const  itemSchema = new Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  src: String,
  quantity: { type: Number },
  size: Map,
  date: { type: Date, default: Date.now }
});

const item = mongoose.model("item",  itemSchema);

module.exports = item;
