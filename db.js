const mongoose = require('mongoose');
require('dotenv').config();

// define the mongodb connection URL

 //const mongoURL = 'mongodb://127.0.0.1:27017/hotal' // rplace hotal that is not parmanent (hotal is a database name)
  //const mongoURL = 'mongodb+srv://kushwahshani:shanikushwah12345@cluster0.esyobnc.mongodb.net/' // rplace hotal that is not parmanent (hotal is a database name)

  // dotenv use to personal detail not show public
  const mongoURL = process.env.DB_URL; 
// set up Mongodb connection

mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

// get the deafualt connection
//  Mongoose maintains the connection object representing the MongoDB connnection
const db = mongoose.connection;

// define event listeners for database connection

db.on('connected', () =>{
    console.log("connected to MongoDB server");
});

db.on('error', () =>{
    console.log("MongoDB connection error");
});

db.on('disconnected', () =>{
    console.log("disconnected to MongoDB server");
});

// export database connection

module.exports = db;