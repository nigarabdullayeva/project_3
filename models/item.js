const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  price: {type: Number, required: true},
  photoURL:{type: String, required: true},
  username:{type: String, required: true},
  userphone:{type: Number, required: true}
});

const Item = mongoose.model("Item", ItemSchema);

module.exports = Item;
