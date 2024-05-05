const express = require('express');
const router = express.Router();
const MenueItems = require('./../modals/Menue');

// Menues data store using the Post method 

router.get('/',async(req, res) =>{
    try{
        const reponse = await MenueItems.find();

        console.log("fetched Menuedata successfully");
        res.status(200).json(reponse);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:"Internal servar error"});
    }
})

// Get method use params
router.get('/:testetype',async(req,res) =>{
    try{
        const testtype = req.params.testetype;
        if(testtype == "sweet" || testtype == "spicy" || testtype == "mediam"){
            const response = await MenueItems.find({teste:testtype});
            res.status(200).json(response);
        }else{
            res.status(404).json({error:'Invalid work type '})
        }
    }catch(err){
        console.log(err);
        res.status(500).json({error:"Invalid servar error"})
    }
})

// Menues data store using the Post method 

router.post('/',async(req, res) =>{
    try{
        const data = req.body;
        const MenueData = new MenueItems(data);

        const response = await MenueData.save();
        console.log("Save MenueItems Successfully")
        res.status(200).json(response);

    }
    catch(err){
        console.log(err);
        res.status(500).json({error:"Internal server error"})
    }
})

module.exports = router;