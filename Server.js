/*var fs = require('fs');
var os = require('os');

var user = os.userInfo();
console.log(user.username);

var uptime = os.uptime();
console.log(uptime);

var hostName = os.hostname();
console.log(hostName)

var machine = os.machine();
console.log(machine);

var networkInterface = os.networkInterfaces();
console.log(networkInterface);

 fs.appendFile('greeting.txt',' Hi ' +user.username+'!\n',() => console.log('file is created'));*/


      
 
 /*// import file in notes foldar
const notes = require('./notes')
const _ = require('lodash')//find a uniq data in arrray using a lodash
console.log("server file is availabal")

var age= notes.age;
console.log(age)

var addNumber = notes.addNumber;
console.log(addNumber(44,6))

var data = ['person','person',1,2,1,1,3,4,4,'age','shani','shani']
var filter = _.uniq(data);
console.log(filter)*/



// JSON data convert to string and string to convert in JSON data

/*// JSON string to object convert
const jsonString = `{"name":"shani","age":20,"city":"Ahmedabad"}`
const jsonObject = JSON.parse(jsonString);
console.log(jsonObject.age);
console.log(jsonObject.name);
console.log(jsonObject.city);*/


/*// JSON object to string convert
const objectToConvert = {
    name:"Kushwah",
    age:21,
    city:"sakraya"
}
const Json = JSON.stringify(objectToConvert);
console.log(Json);
console.log(Json);*/




// Make a server in node js using express js
const express = require('express');
const app = express();
const db = require('./db');
require('dotenv').config();


const bodyParser = require('body-parser');// convert the client side data any formate in required formate
app.use(bodyParser.json()); // and  store data in (req.body  -> sintex)
const PORT = process.env.PORT || 3000;//dotenv function


// Get Method
app.get('/' , function(req, res){
    res.send("This is my first server")
});



   
// Import the Personrouter files
    const PersonRoutes = require('./routers/PersonRoutes');
    app.use('/person',PersonRoutes);

//  Import the Menuerouter files 
    const Menuerouter = require("./routers/MenueRoutes");
    app.use('/menue',Menuerouter);


   
// app.listen(3000,()=>{
app.listen(PORT,()=>{
    console.log("Live server localhost 3000");
})




