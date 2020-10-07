const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Posts collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactcms");

const ItemSeed = [
  {
    title: "Item 1 ",
    description: "new item ",
    location: "Chicago",
    price: "20$",
    photos: ""
  },
  {
    title: "Item 2 ",
    description: "used item ",
    location: "New York",
    price: "50$",
    photos: ""
  },
  {
    title: "Item 3 ",
    description: "new item ",
    location: "Seattle",
    price: "30$",
    photos: ""
  },
];


db.Item.remove({})
  .then(() => db.Item.collection.insertMany(itemSeed))
  .then(data => {
    console.log(data.result.n + "records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });