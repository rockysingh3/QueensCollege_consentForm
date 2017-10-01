'use strict';

const db = require('../db');
const router = require('express').Router();



router.get('/', (req, res) => {
  res.render('index');
});


router.post('/index', (req, res) => {
  // parses the data from the consent-form
    let newUser = new db.userModel({
      eventName: req.body.eventName,
      date: req.body.date,
      location: req.body.location
    });

    // saves all the data in the db
    newUser.save(newUser, (err) => {
      if(err){
        console.log(err);
        return;
      }else{
        res.render('uploads');
      }
    });
}); // end of the post method


router.get('/upload', (req, res) => {
  res.render('uploads');
});



module.exports = {
  router: router
}
