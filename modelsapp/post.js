const mongoose = require("mongoose");
const user = require("./user")
const post = mongoose.Schema({
    title: String,
    description: String,
    imageUrl:String,
    createdAt: {type: Date, default: Date.now},
    createdBy:{
        type:mongoose.Schema.Types.ObjectId, 
        ref: 'user'
    }
   
},{timestamps:true})
module.exports = mongoose.model('post', post);