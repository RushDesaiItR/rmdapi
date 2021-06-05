const mongoose=require('mongoose')
const Book = new mongoose.Schema({
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
    roomName:{
        type:String,
        require:true,
        trim:true,
    },
     days:{
        type:String,
        require:true,
        trim:true,
    },
      time:{
        type:String,
        require:true,
        trim:true,
    },
       date:{
        type:String,
        require:true,
        trim:true,
    },
      docPic:{
        type:String,
        require:true,
        trim:true,
    },    
    event:{
        type:String,
    }
},{ timestamps: true })
module.exports=mongoose.model("Book",Book)