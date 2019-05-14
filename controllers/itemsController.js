const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.item
      .find({})
      .then(dbModel => {
        console.log(dbModel)
        res.json(dbModel)})
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.item   
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log(req.body)
    db.user
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err =>{
        console.log(err)
        res.status(422).json(err);
      } )
  },
  update: function(req, res) {
    db.item
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.item
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
