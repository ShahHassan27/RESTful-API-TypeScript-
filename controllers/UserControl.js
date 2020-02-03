const UserModel = require('../models/UserModel');

module.exports = {
  create: (req, res) => {
    let user = new UserModel({
      _userId: req.body._userId,
      surname: req.body.surname,
      email: req.body.email,
      dob: req.body.dob,
      updated: req.body.updated
    });

    user.save()
      .then(result => {
        res.json({ success: true, result: result });
      })
      .catch(err => {
        res.json({ success: false, result: err });
      });
  },
  update: (req, res) => {
    UserModel.update({_id: req.body._id}, req.body)
      .then(user => {
        if (!user) res.json({ success: false, result: "User does not exist" });

        res.json(user);
      })
      .catch(err => {
        res.json({ success: false, result: err });
      });
  },
  retrieve: (req, res) => {
    UserModel.find()
      .then(result => {
        if (!result) res.json({ success: false, result: "No results found" });

        res.json({ success: true, result: result });
      })
      .catch(err => res.json({success: false, result: err}));
  },
  delete: (req, res) => {
    UserModel.remove({_id: req.body._id})
      .then(result => {
        if (!result) res.json({ success: false, result: "No user was found with the ID" });
        res.json({ success: true, result: result });
      })
      .catch(err => res.json({ success: false, result: err }));
  }
}