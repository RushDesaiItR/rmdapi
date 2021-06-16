const DoctorsOppintment = require("./DoctorsOppintment")
const mongoose=require('mongoose')
const CartUser = new mongoose.Schema({
    conumerName:{
        type:String,
        require:true,
        trim:true,
    },
    address:{
        type:String,
        require:true,
        trim:true,
    },
    contact:{
        type:Number,
        require:true,
       
    }
 
  });

  module.exports = mongoose.model('CartUser',  CartUser);