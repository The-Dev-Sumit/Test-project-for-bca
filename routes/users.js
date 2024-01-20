const mongoose = require('mongoose');
const { MongooseError } = mongoose;
const mysql = require('mysql');
const passportLocalMongoose = require('passport-local-mongoose'); 

mongoose.connect("mongodb://127.0.0.1:27017/testdb");

const usersSchema = mongoose.Schema({
  username: String,
  password: String,
  datecreated: {
    type: Date,
    default: Date.now()
  }
});

const db = mongoose.connection;


db.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

db.once('open', () => {
  console.log('Connected to MongoDB!');
  // Your application logic here
});

db.on('disconnected', () => {
  console.log('MongoDB disconnected!');
});

db.on('reconnected', () => {
  console.log('MongoDB reconnected!');
});

db.on('close', () => {
  console.log('MongoDB connection closed!');
});



usersSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("users", usersSchema);
