// // const express = require('express');
// // const mongoose = require("mongoose")
 require('dotenv').config()
// // var ObjectId = require('mongodb').ObjectID;
// // const stripe = require("stripe")("sk_test_51IonrPSIuSGmKLG43WGHbM7Lt2laDwau2QokpUm11u7IGVbd80orS5l5zY5c4qy46iHhXnLY7b5YwVtPBZrjKz88004HFvslzV")
// // const uuid = require("uuidv4")
// // const fs = require("fs")
// // var http = require('http');
// // const Users = require("./models/user")
// //git add .
// //git push origin master
// //git push heroku HEAD:master
// //https://shrouded-scrubland-67974.herokuapp.com/
// //emulator -avd @name-of-your-emulator
// //emulator -list-avds
// const Patients = require('./models/Patients')
// const Doctors = require('./models/Doctors')
// const DoctorsOppintment = require("./models/DoctorsOppintment")
// const DoctorsOppintmenTime = require("./models/DoctorsOppintmenTime")
// const Medicine = require("./models/medicine.js")
// const User = require("./models/user.js")
// const Book = require("./models/Book.js")
// const SlamBook = require("./models/slambook.js")
// const Feedback = require("./models/Feedback") 
// const Cart = require("./models/Cart") 
// const CartUser = require("./models/CartUser") 






// const app = express();
// var cors = require('cors')
// const port = process.env.PORT || 3800;
// app.use(cors())
// app.use(express.json());

// mongoose.connect(process.env.DB_HOST,
//     { useNewUrlParser: true, useUnifiedTopology: true });
// mongoose.connection.on("connected", () => {
//     console.log("Connected")
// })
// app.get("/patients", (req, res) => {
//     Patients.find()
//         .then((data) => {
//             res.send(data)
//         })
//         .catch((err) => {
//             res.send(err)
//         })

// })
// //olkjiuhgyfdrs
// app.delete("/patients", async (req, res) => {
//     await Patients.deleteMany({})
// })
// app.delete("/oppintment", async (req, res) => {
//     await DoctorsOppintment.deleteMany({})
// })
// app.delete("/oppintmentpatients", async (req, res) => {
//     await DoctorsOppintmenTime.deleteMany({})
// })
// app.post("/patients-login", async (req, res) => {
//     // const loginPatients = await Patients.find({ $or: [{ email: req.body.email, password: req.body.password }] })
//     // console.log(loginPatients)
//     // if (loginPatients.length > 0) {
//     //    res.status(200).send(loginPatients)
//     // } else {
//     //     res.status(500).error({message:"User In Valid"})
//     // }
//     console.log(req.body)
//     let result;
//     Patients.find({$and:[{email:req.body.email},{password:req.body.password}]})
//         .exec()
//         .then(item => {
//             item.length > 0 ? result = true : result = false;
//             if (!result) {
//                 return res.status(200).json({ message: "Incorrect username or password" });
//             }
//             else {
                
//                 return res.status(200).json({message:"success",data:item});

//             }
//         })
// })

// app.post("/users-login", async (req, res) => {
//      res.status(500).error({message:"User In Valid"})
//     // }
//     console.log(req.body)
//     Users.find({ email: req.body.email })
//         .exec()
//         .then(item => {
//             console.log(item)
//             if (!item) {
//                 return res.send({message:"Failed"});
//             }
//             else {
//                 return res.send({message:"success"});

//             }
//         })
// })
// app.post("/cartuser", async(req, res)=>{
//     console.log("cartuser",req.body)
//     const cartUser = new CartUser({
//         conumerName:req.body.conumerName,
//         address:req.body.address,
//         contact:req.body.contact
//      })
//      await cartUser.save()
//             .then(data => {
//                 console.log("data", data)
//                 res.json({
//                     message: "Added Successfully"
//                 })
//             })
// })
// app.post("/cart", async(req,res)=>{
//      const cart = new Cart({
//         cname:req.body.cname,
//         name:req.body.name,
//         price:req.body.price
//      })
//      await cart.save()
//             .then(data => {
//                 console.log("data", data)
//                 res.json({
//                     message: "Added Successfully"
//                 })
//             })
// })

// app.get("/cart",(req, res)=>{
//     Cart.find({})
//     .then(data=>{
//         res.send(data)
//     })
// })
// app.post("/patients", async (req, res) => {
//     console.log("req.body", req.body.pic)
//     try {

//         const patient = new Patients({
//             firstName: req.body.firstName,
//             lastName: req.body.lastName,
//             age: req.body.age,
//             Address: req.body.Address,
//             city: req.body.city,
//             State: req.body.state,
//             email: req.body.email,
//             contact: req.body.contact,
//             password: req.body.password,
//             pic: req.body.pic
//         })
//         console.log(patient)
//         await patient.save()
//             .then(data => {
//                 console.log("data", data)
//                 res.json({
//                     message: "Sign Up Successfully"
//                 })
//             })
//     }

//     catch (e) {
//         res.json({
//             error: "Sign Up Failed"
//         })
//     }
// })
// app.post("/feedback", async(req, res)=>{
//        try {
//            console.log(req.body)
//            const feedback = new Feedback({
//                email:req.body.email,
//                mark:req.body.mark,
//                feedback:req.body.feedback
//            })
//            await feedback.save()
//            .then(data=>{
//                res.json({mgs:"Added" })
//                console.log(data)
//            })
//            .catch(err=>{
//             res.json({mgs:"error" })
//             console.log(err)
           
//            })
//        } catch (error) {
           
//        }
// })
// app.post("/doctors", async (req, res) => {
//     console.log("req.body", req.body.pic)
//     try {

//         const patient = new Patients({
//             firstName: req.body.firstName,
//             lastName: req.body.lastName,
//             age: req.body.age,
//             Address: req.body.Address,
//             city: req.body.city,
//             State: req.body.state,
//             email: req.body.email,
//             contact: req.body.contact,
//             password: req.body.password,
//             pic: req.body.pic
//         })
//         console.log(patient)
//         await patient.save()
//             .then(data => {
//                 console.log("data", data)
//                 res.json({
//                     message: "Sign Up Successfully"
//                 })
//             })
//     }

//     catch (e) {
//         res.json({
//             error: "Sign Up Failed"
//         })
//     }
// })
// //--------------------Payment Gatway---------------------------------------------
// app.post("/payment", (req, res) => {
//     const { product, token } = req.body
//     console.log("Product", product)
//     console.log("token", token)
//     const idmpontementKey = uuid()
//     return stripe.customers.create({
//         email: token.email,
//         source: token.id
//     })
//         .then(customer => {
//             stripe.charges.create({
//                 amount: product.price * 100,
//                 currency: "usd",
//                 customer: customer.id,
//                 receipt_email: token.email,
//                 description: `Purchase Of Product`
//             }, { idmpontementKey })

//         })
//         .then(result => res.status(200).json(result))
//         .catch(err => console.log(err))
// })
// // ----------------------Doctors-------------------------
// app.get("/doctors", cors(), (req, res) => {
//     Doctors.find()
//         .then((data) => {

//             res.send(data)
//         })
//         .catch((err) => {
//             res.send(err)
//         })

// })

// app.post("/user-data",function(req, res){
//     Book.find({fullName:req.body.fullName})
//     .then(resback=>{
//         res.send(resback)
//     })
//     .catch(err=>{
//         console.log(err)
//     })
// })
// app.post("/user-data-patient",function(req, res){
//     console.log(req.body)
//     Patients.find({$and:[{firstName:req.body.firstName}, {lastName:req.body.lastName}]})
//     .then(resback=>{
//         console.log(resback)
//         res.send(resback)
//     })
//     .catch(err=>{
//         console.log(err)
//     })
// })
// app.post("/userby-opt",function(req, res){
//     DoctorsOppintmenTime.find({patientName:req.body.fullName})
//     .then(resback=>{
       
//         res.send(resback)
//     })
//     .catch(err=>{
//         console.log(err)
//     })
// })
// app.delete("/user-data-patient/:name",function(req, res){
   
//  let {name}=req.params;
//     console.log("name",name)
//     DoctorsOppintmenTime.findOneAndDelete({patientName:name})
//     .then(resback=>{
//         res.send(resback)
//     })
//     .catch(err=>{
//         console.log(err)
//     })
// })
// app.delete("/user-databbok/:id",function(req, res){
//     console.log("id")
//     let {id}=req.params;
//     console.log(req.params)
//     Book.findByIdAndDelete(id)
//     .then(resback=>{
//         res.send(resback)
//     })
//     .catch(err=>{
//         console.log(err)
//     })
// })
// app.get("/room-book", function(req, res){
//     Book.find({})
//     .then(resback=>{
//         res.send(resback)
//     })
//     .catch(err=>{
//         res.send(err)
//     })
// })










// app.post("/doctors-patient",cors(),(req, res)=>{
//         try{
//         const Array =[];
//         DoctorsOppintment.find({$and:[{firstName:req.body.firstName, lastName:req.body.lastName}]})
         
//          .then(item => {
//             const _ID =ObjectId(item[0]._id);
        
//             DoctorsOppintmenTime.find({"doctorId":_ID})
//         .then(Data=>{
//                 return res.send(Data);
//             })
//             //  res.json({message:"success", data:item});
//          })
       
//     }
//     catch{

//     }
// })
// app.post("/doctors-login", cors(), (req, res) => {
//        try{
//         Doctors.find({ email: req.body.email })
//         .then(item => {
//             console.log(item)
//             if (item.length == 0) {

//                  res.json({message:"error", error: "Incorrect username or password" });
//             }
//             else {
                
//                  if(item[0].password==req.body.password){
//                      console.log("1")
//                     res.json({message:"success", data:item[0] });
//                  }
//                  else
//                  {
//                     console.log("2")
//                     res.json({message:"error", error: "Incorrect username or password" });
//                  }

//             }
//         })
//        }catch{
//          res.status(400).json({message:"error", error: "Incorrect username or password" });
//        }
       
// })

// app.get("/getslambook", cors(), (req, res) => {
//     SlamBook.find()
//         .then((data) => {

//             res.send(data)
//         })
//         .catch((err) => {
//             res.send(err)
//         })

// })
// app.get("/doctor-login", async (req, res) => {
//     const loginDoctors = await Doctors.find({ $or: [{ email: req.body.email, password: req.body.password }] })

//     if (loginDoctors.length > 0) {
//         res.json({
//             message: "Log Successfully"
//         })
//     } else {
//         res.json({
//             error: "Log Failed"
//         })
//     }
// })

// app.get("/slambookid/:id", cors(), async (req, res) => {
//     SlamBook.findById(req.params.id)
//         .then(data => {
//             res.send(data)
//         })
//         .catch(error => {
//             res.send(error)
//         })




// })
// app.post("/doctor", async (req, res) => {
//     if (await Doctors.findOne({ email: req.body.email })) {
//         return res.json({ error: "Email Already Exists" })
//     }

//     try {
//         const doctors = new Doctors({
//             firstName: req.body.firstName,
//             lastName: req.body.lastName,
//             specality: req.body.specality,
//             Address: req.body.Address,
//             city: req.body.city,
//             state: req.body.state,
//             email: req.body.email,
//             contact: req.body.contact,
//             password: req.body.password,
//             pic: req.body.pic
//         })
//         await doctors.save().then(data => {
//             return res.json({
//                 message: "Sign Up Successfully"
//             })
//         }).error(error => {
//             return res.json({
//                 message: "error"
//             })
//         })

//     }
//     catch (e) {
//         res.send(e)
//     }
// })
// app.post("/doctorsoppintment", async (req, res) => {

//     try {
//         const DoctorsOppintmentExist = await DoctorsOppintment.findOne({ firstName: req.body.firstName })

//         if (DoctorsOppintmentExist === null) {
//             const doctorsOppintment = new DoctorsOppintment({
//                 firstName: req.body.firstName,
//                 lastName: req.body.lastName
//             })
//             const trtr = await doctorsOppintment.save()
//             const DoctorsOppintmentCheck = await DoctorsOppintment.findOne({ _id: trtr._id })

//             const doctorsOppintmenTime = new DoctorsOppintmenTime({
//                 patientName: req.body.patientName,
//                 Time: req.body.Time,
//                 Date: req.body.Date,
//                 doctorId: DoctorsOppintmentCheck._id,
//                 email:req.body.email
//             })

//             await doctorsOppintmenTime.save()
//             DoctorsOppintmentCheck.oppintments.push(doctorsOppintmenTime._id)
//             const reSend2 = await DoctorsOppintmentCheck.save()
//             res.send(reSend2)

//         }
//         else {

//             const doctorsExists = await DoctorsOppintment.findOne({ _id: DoctorsOppintmentExist._id })

//             const doctorsOppintmenTime = new DoctorsOppintmenTime({
//                 patientName: req.body.patientName,
//                 Time: req.body.Time,
//                 Date: req.body.Date,
//                 doctorId: doctorsExists._id
//             })

//             const doctorsOppintmenTime2 = await doctorsOppintmenTime.save()

//             doctorsExists.oppintments.push(doctorsOppintmenTime2._id)
//             const reSend = await doctorsExists.save()
//             res.send(reSend)

//         }
//     } catch (e) {
//         res.send(e)
//     }
// })
// async function doctorExists(id) {
//     try {
//         const DoctorsOppintmentCheck = await DoctorsOppintment.findOne({ _id: req.params.oppointmentId })

//         const doctorsOppintmenTime = new DoctorsOppintmenTime({
//             patientName: req.body.patientName,
//             Time: req.body.Time,
//             Date: req.body.Date,
//             doctorId: DoctorsOppintmentCheck._id
//         })

//         await doctorsOppintmenTime.save()
//         DoctorsOppintmentCheck.oppintments.push(doctorsOppintmenTime._id)
//         await DoctorsOppintmentCheck.save()
//             .then(data => {
//                 return res.json({
//                     message: "Oppintment Done"
//                 })
//             })
//             .error(error => {
//                 return res.json({
//                     error: error
//                 })
//             })

//     } catch (e) {
//         res.send(e)
//     }
// }
// app.post("/:oppointmentId/doctorsoppintmentime", async (req, res) => {

//     console.log("req", req.body)
//     try {
//         const DoctorsOppintmentCheck = await DoctorsOppintment.findOne({ _id: req.params.oppointmentId })

//         const doctorsOppintmenTime = new DoctorsOppintmenTime({
//             patientName: req.body.patientName,
//             Time: req.body.Time,
//             Date: req.body.Date,
//             doctorId: DoctorsOppintmentCheck._id
//         })
//         console.log(doctorsOppintmenTime, "doctorsOppintmenTime")
//         await doctorsOppintmenTime.save()
//         DoctorsOppintmentCheck.oppintments.push(doctorsOppintmenTime._id)
//         await DoctorsOppintmentCheck.save()
//             .then(data => {
//                 return res.json({
//                     message: "Oppintment Done"
//                 })
//             })
//             .error(error => {
//                 return res.json({
//                     error: error
//                 })
//             })

//     } catch (e) {
//         res.send(e)
//     }
// })
// //medicine
// app.post("/medicine", async (req, res) => {

//     try {

//         const medicine = new Medicine({
//             name: req.body.name,
//             des: req.body.des,
//             price: req.body.price,
//             offerprice: req.body.offerprice,
//             pic: req.body.pic
//         })

//         await medicine.save()
//             .then(data => {
//                 console.log("data", data)
//                 res.json({
//                     message: "Medicine Added"
//                 })
//             })
//             .catch(error => {
//                 res.json({
//                     message: error
//                 })
//             })
//     }

//     catch (e) {
//         res.json({
//             error: "Sign Up Failed"
//         })
//     }
// })
// app.get("/medicine", async (req, res) => {
//     await Medicine.find({})
//         .then(data => {
//             res.send(data)
//         })
// })


// //----------------------------dipak api



// app.post("/user", async (req, res) => {

//     try {
//         console.log(req.body)
//         const user = new User({
//             fullName: req.body.fullName,
//             address: req.body.address,
//             email: req.body.email,
//             contact: req.body.contact,
//             password: req.body.password,

//         })
//         console.log(user)
//         await user.save()
//             .then(data => {
//                 console.log(data)
//                 res.json({
//                     message: "Sign Up Successfully"
//                 })
//             })
//     }

//     catch (e) {
//         res.json({
//             error: "Sign Up Failed"
//         })
//     }
// })

// app.post("/book", async (req, res) => {
//     console.log("request come", req.body)
//     try {

//         const book = new Book({

//             fullName: req.body.fullName,
//             address: req.body.address,
//             email: req.body.email,
//             contact: req.body.contact,
//             roomName: req.body.roomName,
//             days: req.body.days,
//             time: req.body.time,
//             date: req.body.date,
//             docPic: req.body.docPic,
//             event: req.body.event
//         })

//         await book.save()
//             .then(data => {

//                 res.json({
//                     message: "Room Booked"
//                 })
//             })
//             .catch(error => {
//                 res.json({
//                     message: error
//                 })
//             })
//     }

//     catch (e) {
//         res.json({
//             error: "Sign Up Failed"
//         })
//     }
// })

// app.get("/", (req, res) => {
//     res.send("Welcome")
// })



// app.post("/slambook", async (req, res) => {

//     try {

//         const slamBook = new SlamBook({
//             q1: req.body.q1,
//             q2: req.body.q2,
//             q3: req.body.q3,
//             q4: req.body.q4,
//             q5: req.body.q5,
//             q6: req.body.q6,
//             q7: req.body.q7,
//             q8: req.body.q8,
//             q9: req.body.q9,
//             q10: req.body.q10,
//             q11: req.body.q11,
//             q12: req.body.q12,


//         })

//         await slamBook.save()
//             .then(data => {

//                 res.json({
//                     message: "Done"
//                 })
//             })
//             .catch(error => {
//                 res.json({
//                     message: error
//                 })
//             })
//     }

//     catch (e) {
//         res.json({
//             error: "Sign Up Failed"
//         })
//     }
// })








// // app.listen(port, function () {
// //     console.log("Server is listening at port:" + port);

// // })

























const express = require('express');
const app = express();

app.use(express.json()); //or use body-parser middleware to parse the JSON body from HTTP request
const port = process.env.PORT || 3800;
// Import Routes
const authRoute = require('./routes/index');
 

// Route Middlewares
app.use('/api', authRoute);



app.listen(port, function(){
    console.log("Server running on localhost:" + port);
});