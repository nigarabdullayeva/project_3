const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Posts collection and inserts the books below
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/sportadventures");


const ItemSeed = [
  {
    category: "type of item",
    title: "Item 1 ",
    description: "new item ",
    location: "Chicago",
    price: "20$",
    photos: "",
    phone: "312 000 0000"
  },
  {
    category: "type of item",
    title: "Item 2 ",
    description: "used item ",
    location: "New York",
    price: "50$",
    photos: "",
    phone: "312 000 0001"

  },
  {
    category: "type of item",
    title: "Item 3 ",
    description: "new item ",
    location: "Seattle",
    price: "30$",
    photos: "",
    phone: "312 100 0000"

  },
];


db.Item.remove({})
  .then(() => db.Item.collection.insertMany(ItemSeed))
  .then(data => {
    console.log(data.result.n + "records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });