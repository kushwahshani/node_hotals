const express = require('express');
const router = express.Router();
const person = require('./../modals/Person');

// Get Method to get the person

router.get('/',async(req,res)=>{
    try{
        const data = await person.find();
        console.log("data fetched")
        res.status(200).json(data);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Error'})
    }
})

//Post Method router to add a person

router.post('/', async(req,res) =>{
    try{
        const data = req.body; // assigning the request body contains the person data
        const newPerson = new person(data);
        
        const response = await newPerson.save();
        console.log("data save");
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({err:'Internal Server Error'});
    }
})

// Get method use Params
router.get('/:worktype', async(req, res) =>{
    try{
        const worktype = req.params.worktype;
        if(worktype == "chef" || worktype == "waiter" || worktype == "manegar" || worktype == "backand devlopar"){
            const response = await person.find({work: worktype});
            console.log("successfully find work type")
            res.status(200).json(response);
        }else{
            res.status(404).json({error:'Invalid work type'})
        }
    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Error'})
    }
})

// Put method use to update the data from person

router.put('/:id', async(req , res) =>{
    try{
        const personId = req.params.id;// Extract the id from the url parameter
        const UpdatePersonData = req.body; //Update data for the person

        const response = await person.findByIdAndUpdate(personId, UpdatePersonData,{
            new:true,// return the update document
            runValidators:true// run mongoose validators
        })
        if(!response){
            return res.status(404).json({error:'person not found'})
        }
        console.log('data upddated ');
        res.status(200).json(response);


    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Error'});
    }
})  

//Delete date using delete method fro the person data
router.delete('/:id', async(req, res) =>{
    try{
        const personId = req.params.id;// Extract the id from the url parameter

        //assigning you have a person model
        const response = await person.findByIdAndDelete(personId);
        if(!response){
            return res.status(404).json({message:'person delete successfully'});
        }
     } catch(err){
        console.log(err)
        res.status(500).json({error:'Invalid server error'})
     }
})

module.exports = router;
// just check for git and git hub 