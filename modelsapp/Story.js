const mongoose = require("mongoose");
const user = require("./user")
const Story = mongoose.Schema({
    src:{
        type:String,
        require:true
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    createdOn:{
        type: Date,
		default: Date.now,
        index: { expires: '24h' }
    },
    removeOn:{
        type: Date,
		default: new Date(+new Date() + 7*24*60*60*1000),
    }
})
module.exports = mongoose.model("story", Story)