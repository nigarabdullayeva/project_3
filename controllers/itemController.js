
const db = require("../models");


module.exports = {
  findAll: function (req, res) {
    db.Item.find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  search: function (req, res) {
    console.log(req.query.search,req.query.category)
    if (req.query.search = "") {
      db.Item.find()(
        { category: { $regex: req.query.category, $options: "i" } }
      )
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    } else if (req.query.category = "") {
      db.Item.find()(
        { location: { $regex: req.query.search, $options: "i" } },
      )
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    } else {
      db.Item.find().and([
        { location: { $regex: req.query.search, $options: "i" } },
        { category: { $regex: req.query.category, $options: "i" } }
      ])
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }},


    findById: function(req, res) {
      db.Item.findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
      console.log(req.body)
      db.Item.create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => {
          console.log(err)
          res.status(422).json(err)
        });
    },
    update: function(req, res) {
      db.Item.findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
      db.Item.findById({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
  };