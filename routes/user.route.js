
const express = require('express');
const app = express();
const UserRoutes = express.Router();

// Require Business model in our routes module
let User = require('../models/User');

// Defined store route
UserRoutes.route('/user/add').post(function (req, res) {
    console.log(req.body)
  let user = new User(req.body);
  user.save()
    .then(user => {
      res.status(200).json({'result': 'successfully','status':200});
    })
    .catch(err => {
    res.status(400).send({'result': 'error','status':400});
    });
});

// Defined get data(index or listing) route
UserRoutes.route('/user').get(function (req, res) {
  User.find(function (err, users){
    if(err){
      console.log(err);
    }
    else {
        console.log(users)
      res.json(users);
    }
  });
});

// Defined edit route
UserRoutes.route('/user/edit/:id').get(function (req, res) {
  let id = req.params.id;
  user.findById(id, function (err, users){
      res.json(users);
  });
});

//  Defined update route
UserRoutes.route('/user/update/:id').post(function (req, res) {

  user.findById(req.params.id, function(err, users) {
        console.log("datod:",users)
    if (!users)
    res.json('Could not load Document',err)
    else {
      users.id = req.body.id;
      users.name = req.body.name;
      users.last_name = req.body.last_name;
      users.email = req.body.email;
      users.phone = req.body.phone;
      users.address = req.body.address;
      users.code_contry = req.body.code_contry;

      users.save().then(users => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
UserRoutes.route('/user/delete/:id').get(function (req, res) {
    user.findByIdAndRemove({_id: req.params.id}, function(err, users){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = UserRoutes;