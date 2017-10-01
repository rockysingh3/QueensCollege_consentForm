'use strict';
const config = require('../config');
const Mongoose = require('Mongoose').connect(config.dbURI);


Mongoose.connection.on('error', error => {
  console.log("MongoDB Error: ", error);
});


const User = new Mongoose.Schema({
  eventName: String,
  date: Date,
  location: String,
  email: String,
  firstName: String,
  lastName: String,
  cunyID: String,
  gender: String,
  phoneNumber: String
});


let userModel = Mongoose.model('User', User);




module.exports = {
  Mongoose: Mongoose,
  userModel: userModel
}
