const mongoose=require('mongoose')
const Patients = new mongoose.Schema({
    firstName:{
        type:String,
        require:true,
        trim:true,
    },
    lastName:{
        type:String,
        require:true,
        trim:true,
    },
    age:{
        type:Number,
        require:true,
        trim:true,
    },
    Address:{
        type:String,
        require:true,
        trim:true,
    },
  
    city:{
        type:String,
        require:true,
        trim:true,
    },
    State:{
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
    pic:{
        type:String,
      
    }
},{ timestamps: true })
module.exports=mongoose.model("Patients",Patients)