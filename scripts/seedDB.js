const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Posts collection and inserts the books below
 project_3/nigar
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/sportadv");


const ItemSeed = [
  {
    title: "Item 1 ",
    description: "new item ",
    location: "Chicago",
    price: "20$",
    photos: "",
    username: "name",
    userphone: "312 000 0000"
  },
  {
    title: "Item 2 ",
    description: "used item ",
    location: "New York",
    price: "50$",
    photos: "",
    username: "namee",
    userphone: "312 000 0001"

  },
  {
    title: "Item 3 ",
    description: "new item ",
    location: "Seattle",
    price: "30$",
    photos: "",
    username: "namena",
    userphone: "312 100 0000"

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