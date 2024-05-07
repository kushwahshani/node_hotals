

// Make a server in node js using express js
const express = require('express');
const app = express();
const db = require('./db');
require('dotenv').config();
const passport = require('./auth')



const bodyParser = require('body-parser');// convert the client side data any formate in required formate
app.use(bodyParser.json()); // and  store data in (req.body  -> sintex)
const PORT = process.env.PORT || 3000;//dotenv function


// middleware function use 
const logRequest = (req, res, next) =>{
    console.log(`[${new Date()}] Request madd to: ${req.originalUrl}`)
    next();
}
app.use(logRequest);


// initialize the authenticate 
app.use(passport.initialize())
const locaAuthentication = passport.authenticate('local',{session:false})
// Get Method
// app.get('/' , logRequest,function(req, res){
app.get('/',function(req, res){
    res.send("This is my first server")
});



   
// Import the Personrouter files
    const PersonRoutes = require('./routers/PersonRoutes');
    app.use('/person',locaAuthentication,PersonRoutes);

//  Import the Menuerouter files 
    const Menuerouter = require("./routers/MenueRoutes");
const person = require('./modals/Person');
    app.use('/menue',Menuerouter);


   
// app.listen(3000,()=>{
app.listen(PORT,()=>{
    console.log("Live server localhost 3000");
})




