const mongoose=require('mongoose')

const Schema = mongoose.Schema;
const Medicine = Schema({
    
        name:{
            type:String,
            require:true,
            trim:true,
        },
        des:{
            type:String,
            require:true,
            trim:true,
        },
         price:{
            type:Number,
            require:true,
            trim:true,
        },
        offerprice:{
             type:Number,
            require:true,
            trim:true,
        },
          pic:{
            type:String,
            require:true,
            trim:true,
        },
       
    
});

module.exports= mongoose.model(' Medicine',  Medicine);