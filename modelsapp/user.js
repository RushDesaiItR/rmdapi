const mongoose = require('mongoose');
const post = require("./post")
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: String,
    password: String,
    name:String,
    user_type_id:Number,
    posts:[
        {
         type:Schema.Types.ObjectId,
          ref: 'post'
        }
     ],
     stories:[
       {
         type:Schema.Types.ObjectId,
         ref:'story'
       }
     ],
     friendlist:[
       {
         type:Schema.Types.ObjectId,
         ref: 'user'
       }
     ],

     pendinFriendlist:[
      {
        type:Schema.Types.ObjectId,
        ref: 'user'
      }
    ],

},{timestamps:true});

module.exports = mongoose.model('user', userSchema, 'users');