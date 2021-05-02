const mongoose=require('mongoose')
const DoctorsOppintmentTime=require("./DoctorsOppintmenTime")
const Schema = mongoose.Schema;
const DoctorsOppintment = Schema({
    
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
        oppintments:[
           {
            type:Schema.Types.ObjectId,
             ref: 'DoctorsOppintmentTime'
           }
        ]
    
});

module.exports= mongoose.model('DoctorsOppintment', DoctorsOppintment);