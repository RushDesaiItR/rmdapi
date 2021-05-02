const mongoose=require('mongoose')
const User = new mongoose.Schema({
    fullName:{
        type:String,
        require:true,
        trim:true,
    },

    address:{
        type:String,
        require:true,
        trim:true,
    },
 
    email:{
        type:String,
        require:true,
        trim:true,
    },
    contact:{
        type:Number,
        require:true,
        trim:true,
    },
    password:{
        type:String,
        require:true,
        trim:true,
    },
 
},{ timestamps: true })
module.exports=mongoose.model("User",User)