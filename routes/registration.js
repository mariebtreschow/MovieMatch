const bcrypt = require('bcrypt');

var express = require('express'),
         db = require('../models'),
    router = express.Router();


router.get('/', (req, res) => {
   res.render('users/new');
});

router.post('/', (req, res) => {
   db.User.create(req.body).then((user) => {
      res.redirect('/login');
   }).catch((error) => {
      console.log(error);
      res.render('users/new');
   });
});

module.exports = router;
