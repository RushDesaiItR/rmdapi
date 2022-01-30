const mongoose = require('mongoose');
const post = require("./post")
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: String,
    password: String,
    name:String,
    user_type_id:Number,
    imageUrl:String,
    copyArr:Array,
    posts:[
        {
         type:Schema.Types.ObjectId,
          ref: 'post'
        }
     ],
     storiesnew:[
       {
         type:Schema.Types.ObjectId,
         ref:'storynew'
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
      },
    ],
      sendedFriendlist:[
        {
          type:Schema.Types.ObjectId,
          ref: 'user'
        },
      
    ],

},{timestamps:true});

module.exports = mongoose.model('user', userSchema, 'users');