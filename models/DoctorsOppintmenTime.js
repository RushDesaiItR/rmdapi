const DoctorsOppintment = require("./DoctorsOppintment")
const mongoose=require('mongoose')
const DoctorsOppintmentTime = new mongoose.Schema({
    patientName:{
        type:String,
        require:true,
        trim:true,
    },
    email:{
        type:String,
        require:true
    },
    Time:{
        type:String,
        require:true
    },
    Date:{
        type:String,
        require:true
    },
    doctorId:{
        type:mongoose.Schema.Types.ObjectId, ref: 'DoctorsOppintment'
    }
  });
  console.log(Date())
  module.exports = mongoose.model('DoctorsOppintmentTime',  DoctorsOppintmentTime);