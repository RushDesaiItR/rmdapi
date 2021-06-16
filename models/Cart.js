const DoctorsOppintment = require("./DoctorsOppintment")
const mongoose=require('mongoose')
const Cart = new mongoose.Schema({
    cname:{
        type:String,
        require:true,
        trim:true,
    },
    name:{
        type:String,
        require:true,
        trim:true,
    },
    price:{
        type:Number
    }
  });

  module.exports = mongoose.model('Cart',  Cart);