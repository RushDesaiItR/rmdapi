const mongoose=require('mongoose')
const Feedback = new mongoose.Schema({

    email:{
        type:String,
        require:true,
        trim:true
    },
    mark:{
        type:Number,
        require:true,
        trim:true,
    },
    feedback:{
        type:String,
        require:true,
        trim:true
    },
    
},{ timestamps: true })
module.exports=mongoose.model("Feedback",Feedback)