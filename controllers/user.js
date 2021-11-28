const mongoose = require('mongoose');

const config = require("../config/config");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../modelsapp/user");
const PostUser = require("../modelsapp/post")
var XLSX = require('xlsx');
app.use(express.json());
mongoose.connect("mongodb+srv://RushikeshDesai:Mahavir@7890@cluster0.p3bve.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
mongoose.connection.on("connected", () => {
    console.log("Connected")
})
exports.register = async (req, res) => {

    //Hash password
    const salt = await bcrypt.genSalt(10);
    const hasPassword = await bcrypt.hash(req.body.password, salt);

    // Create an user object
    let user = new User({
        email: req.body.email,
        name: req.body.name,
        password: hasPassword,
        user_type_id: req.body.user_type_id
    })

    // Save User in the database
    user.save((err, registeredUser) => {
        if (err) {
            console.log(err)
        } else {
            // create payload then Generate an access token
            let payload = { id: registeredUser._id, user_type_id: req.body.user_type_id || 0 };
            const token = jwt.sign(payload, config.TOKEN_SECRET);

            res.status(200).send({ token })
        }
    })
}
exports.getData = async (req, res)=>{
        return res.send("nnnnnnnnnnnnnnnnnnnn")
        var workbook = XLSX.readFile(req.file)
        var sheet_name_list = workbook.SheetNames;
        res.send(XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]))
      

}
exports.createPost = async (req, res)=>{
   
     let post = new PostUser({
        title: req.body.title,
        description: req.body.description,
        imageUrl:req.body.imageUrl,
        createdBy:req.params.id
     })
     post.save(async(err, savedPost)=>{
         if(err){
            console.log(err)
         }else{
            const userCheck = await User.findOne({ _id: req.params.id })
            userCheck.posts.push(savedPost._id)
            userCheck.save();
            res.status(200).send(savedPost)
         }
     })
}
exports.getUserData = async(req, res)=>{
    
    User.findOne({  _id: req.params.id }, async (err, user) => {
        if (err) {
            console.log(err)
        } else {
            if (user) {
                res.status(200).send(user);
            }
            else {
                res.status(401).send('no user found')
            }

        }
    })
}
exports.getUserPosts = async(req, res)=>{
    User.findOne({_id: req.params.id})
    .populate('posts')
    .exec((err, arr)=>{
        res.status(200).send(arr.posts)
     })
    
}

exports.getUserpendinFriendlist = async (req, res)=>{
    console.log("sdsd")
    User.findOne({_id: req.params.id})
    .populate('pendinFriendlist')
    .exec((err, arr)=>{
        res.status(200).send(arr)
    })
}

exports.getUserFriendlist = async (req, res)=>{
    
    User.findOne({_id: req.params.id})
    .populate('friendlist')
    .exec((err, arr)=>{
        res.status(200).send(arr)
    })
}



exports.createFriend = async(req, res)=>{
    const userCheck = await User.findOne({ _id: req.params.id })
    userCheck.pendinFriendlist.push(req.body._id)
    userCheck.save();
    res.status(200).send(userCheck)
}
exports.addIntoFriendList=async(req, res)=>{
  //  const userCheck = await User.findOne({ _id: req.params.id })
    User.findOneAndUpdate({  _id: req.params.id }, {
        $pull: {
            'pendinFriendlist': req.body._id
        }
    }, async function (err, model) {
        if (!err) {
            const userCheck = await User.findOne({ _id: req.params.id })
            userCheck.friendlist.push(req.body._id)
            userCheck.save();
            res.json("friend Added Sucessfully")
        }
        else {
            res.status(500).json(err)
        }
    });
   // userCheck.find(req.body._id)
    // userCheck.friendlist.push(req.params.id)
    // userCheck.save();
   

}
exports.getAllUser = async(req, res)=>{
   User.find({})
       .then(response=>{
           res.send(response)
       })
}
exports.login = async (req, res) => {
 
    User.findOne({ email: req.body.email }, async (err, user) => {
        if (err) {
            console.log(err)
        } else {
            if (user) {
                const validPass = await bcrypt.compare(req.body.password, user.password);
                if (!validPass) return res.status(401).send("Mobile/Email or Password is wrong");

                // Create and assign token
                let payload = { id: user._id, user_type_id: user.user_type_id };
                const token = jwt.sign(payload, config.TOKEN_SECRET);

                res.status(200).header("auth-token", token).send({ "token": token });
            }
            else {
                res.status(401).send('Invalid mobile')
            }

        }
    })
}

// Access auth users only
exports.userEvent = (req, res) => {
    let events = [
        {
            "_id": "1",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
        },
        {
            "_id": "2",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
        },
        {
            "_id": "3",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
        }
    ]
    res.json(events)
};

exports.adminEvent = (req, res) => {
    let specialEvents = [
        {
            "_id": "1",
            "name": "Auto Expo Special",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
        },
        {
            "_id": "2",
            "name": "Auto Expo Special",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
        },
        {
            "_id": "3",
            "name": "Auto Expo Special",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
        },
        {
            "_id": "4",
            "name": "Auto Expo Special",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
        },
        {
            "_id": "5",
            "name": "Auto Expo Special",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
        },
        {
            "_id": "6",
            "name": "Auto Expo Special",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
        }
    ]
    res.json(specialEvents)

}