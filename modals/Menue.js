
const mongoose = require('mongoose');

const menueItemSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true,
    },
    teste:{
        type:String,
        required:true,
        enum:["sweet","spicy","mediam"]
    },
    is_drink:{
        type:Boolean,
        default:false
    },
    ingradients:{
        type:[String],
        default:[]
    }


})

const MenueItems = mongoose.model('menueItem',menueItemSchema );
module.exports = MenueItems;