const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  price: {type: Number, required: true},
  photos:{type: URL, required: true}
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
