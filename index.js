const express = require('express');
const mongoose = require("mongoose")
require('dotenv').config()
//git add .
//git push origin master
//git push heroku HEAD:master
//https://shrouded-scrubland-67974.herokuapp.com/
//emulator -avd @name-of-your-emulator
//emulator -list-avds
const Patients = require('./models/Patients')
const Doctors = require('./models/Doctors')
const DoctorsOppintment = require("./models/DoctorsOppintment")
const DoctorsOppintmenTime = require("./models/DoctorsOppintmenTime")
const Medicine = require("./models/medicine.js")
const User = require("./models/user.js")
const Book = require("./models/Book.js")
const SlamBook = require("./models/slambook.js")
const app = express();
var cors = require('cors')
const port = process.env.PORT || 3800;
app.use(cors())
app.use(express.json());

mongoose.connect(process.env.DB_HOST,
    { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on("connected", () => {
    console.log("Connected")
})
app.get("/patients", (req, res) => {
    Patients.find()
        .then((data) => {
            res.send(data)
        })
        .catch((err) => {
            res.send(err)
        })

})
app.delete("/patients", async (req, res) => {
    await Patients.deleteMany({})
})
app.delete("/oppintment", async (req, res) => {
    await DoctorsOppintment.deleteMany({})
})
app.delete("/oppintmentpatients", async (req, res) => {
    await DoctorsOppintmenTime.deleteMany({})
})
app.get("/patients-login", async (req, res) => {
    const loginPatients = await Patients.find({ $or: [{ email: req.body.email, password: req.body.password }] })
    console.log(loginPatients)
    if (loginPatients.length > 0) {
        res.send(loginPatients)
    } else {
        res.send(loginPatients)
    }
})
app.post("/patients", async (req, res) => {
    console.log("req.body", req.body.pic)
    try {

        const patient = new Patients({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            age: req.body.age,
            Address: req.body.Address,
            city: req.body.city,
            State: req.body.state,
            email: req.body.email,
            contact: req.body.contact,
            password: req.body.password,
            pic: req.body.pic
        })
        console.log(patient)
        await patient.save()
            .then(data => {
                console.log("data", data)
                res.json({
                    message: "Sign Up Successfully"
                })
            })
    }

    catch (e) {
        res.json({
            error: "Sign Up Failed"
        })
    }
})

// ----------------------Doctors-------------------------
app.get("/doctors", cors(), (req, res) => {
    Doctors.find()
        .then((data) => {

            res.send(data)
        })
        .catch((err) => {
            res.send(err)
        })

})
app.get("/getslambook", cors(), (req, res) => {
      SlamBook.find()
        .then((data) => {

            res.send(data)
        })
        .catch((err) => {
            res.send(err)
        })

})
app.get("/doctor-login", async (req, res) => {
    const loginDoctors = await Doctors.find({ $or: [{ email: req.body.email, password: req.body.password }] })

    if (loginDoctors.length > 0) {
        res.json({
            message: "Log Successfully"
        })
    } else {
        res.json({
            error: "Log Failed"
        })
    }
})

app.get("/slambookid/:id", async (req, res) => {
    SlamBook.findById(req.params.id)
    .then(data=>{
      res.send(data)
    })
    .catch(error=>{
        res.send(error)
    })


  
    
})
app.post("/doctor", async (req, res) => {
    if (await Doctors.findOne({ email: req.body.email })) {
        return res.json({ error: "Email Already Exists" })
    }

    try {
        const doctors = new Doctors({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            specality: req.body.specality,
            Address: req.body.Address,
            city: req.body.city,
            state: req.body.state,
            email: req.body.email,
            contact: req.body.contact,
            password: req.body.password,
            pic: req.body.pic
        })
        await doctors.save().then(data => {
            return res.json({
                message: "Sign Up Successfully"
            })
        }).error(error => {
            return res.json({
                error: error
            })
        })

    }
    catch (e) {
        res.send(e)
    }
})
app.post("/doctorsoppintment", async (req, res) => {

    try {
        const DoctorsOppintmentExist = await DoctorsOppintment.findOne({ firstName: req.body.firstName })

        if (DoctorsOppintmentExist === null) {
            const doctorsOppintment = new DoctorsOppintment({
                firstName: req.body.firstName,
                lastName: req.body.lastName
            })
            const trtr = await doctorsOppintment.save()
            const DoctorsOppintmentCheck = await DoctorsOppintment.findOne({ _id: trtr._id })

            const doctorsOppintmenTime = new DoctorsOppintmenTime({
                patientName: req.body.patientName,
                Time: req.body.Time,
                Date: req.body.Date,
                doctorId: DoctorsOppintmentCheck._id
            })

            await doctorsOppintmenTime.save()
            DoctorsOppintmentCheck.oppintments.push(doctorsOppintmenTime._id)
            const reSend2 = await DoctorsOppintmentCheck.save()
            res.send(reSend2)

        }
        else {

            const doctorsExists = await DoctorsOppintment.findOne({ _id: DoctorsOppintmentExist._id })

            const doctorsOppintmenTime = new DoctorsOppintmenTime({
                patientName: req.body.patientName,
                Time: req.body.Time,
                Date: req.body.Date,
                doctorId: doctorsExists._id
            })

            const doctorsOppintmenTime2 = await doctorsOppintmenTime.save()

            doctorsExists.oppintments.push(doctorsOppintmenTime2._id)
            const reSend = await doctorsExists.save()
            res.send(reSend)

        }
    } catch (e) {
        res.send(e)
    }
})
async function doctorExists(id) {
    try {
        const DoctorsOppintmentCheck = await DoctorsOppintment.findOne({ _id: req.params.oppointmentId })

        const doctorsOppintmenTime = new DoctorsOppintmenTime({
            patientName: req.body.patientName,
            Time: req.body.Time,
            Date: req.body.Date,
            doctorId: DoctorsOppintmentCheck._id
        })

        await doctorsOppintmenTime.save()
        DoctorsOppintmentCheck.oppintments.push(doctorsOppintmenTime._id)
        await DoctorsOppintmentCheck.save()
            .then(data => {
                return res.json({
                    message: "Oppintment Done"
                })
            })
            .error(error => {
                return res.json({
                    error: error
                })
            })

    } catch (e) {
        res.send(e)
    }
}
app.post("/:oppointmentId/doctorsoppintmentime", async (req, res) => {

    console.log("req", req.body)
    try {
        const DoctorsOppintmentCheck = await DoctorsOppintment.findOne({ _id: req.params.oppointmentId })

        const doctorsOppintmenTime = new DoctorsOppintmenTime({
            patientName: req.body.patientName,
            Time: req.body.Time,
            Date: req.body.Date,
            doctorId: DoctorsOppintmentCheck._id
        })
        console.log(doctorsOppintmenTime, "doctorsOppintmenTime")
        await doctorsOppintmenTime.save()
        DoctorsOppintmentCheck.oppintments.push(doctorsOppintmenTime._id)
        await DoctorsOppintmentCheck.save()
            .then(data => {
                return res.json({
                    message: "Oppintment Done"
                })
            })
            .error(error => {
                return res.json({
                    error: error
                })
            })

    } catch (e) {
        res.send(e)
    }
})
//medicine
app.post("/medicine", async (req, res) => {

    try {

        const medicine = new Medicine({
            name: req.body.name,
            des: req.body.des,
            price: req.body.price,
            offerprice: req.body.offerprice,
            pic: req.body.pic
        })

        await medicine.save()
            .then(data => {
                console.log("data", data)
                res.json({
                    message: "Medicine Added"
                })
            })
            .catch(error => {
                res.json({
                    message: error
                })
            })
    }

    catch (e) {
        res.json({
            error: "Sign Up Failed"
        })
    }
})
app.get("/medicine", async (req, res) => {
    await Medicine.find({})
        .then(data => {
            res.send(data)
        })
})


//----------------------------dipak api


app.get("/user-login", async (req, res) => {
    console.log(req.body)
    // const user = await User.find({ $or: [{ email: req.body.email, password: req.body.password }] })
    // console.log(user)
    // if (user.length > 0) {
    //     res.send(user)
    // } else {
    //     res.send(user)
    // }
})
app.post("/user", async (req, res) => {

    try {
        console.log(req.body)
        const user = new User({
            fullName: req.body.fullName,
            address: req.body.address,
            email: req.body.email,
            contact: req.body.contact,
            password: req.body.password,

        })
        console.log(user)
        await user.save()
            .then(data => {
                console.log(data)
                res.json({
                    message: "Sign Up Successfully"
                })
            })
    }

    catch (e) {
        res.json({
            error: "Sign Up Failed"
        })
    }
})

app.post("/book", async (req, res) => {
       console.log("request come",req.body)
    try {

        const book = new Book({

            fullName: req.body.fullName,
            address: req.body.address,
            email: req.body.email,
            contact: req.body.contact,
            roomName: req.body.roomName,
            days: req.body.days,
            time: req.body.time,
            date: req.body.date,
            docPic: req.body.docPic
        })

        await book.save()
            .then(data => {

                res.json({
                    message: "Room Booked"
                })
            })
            .catch(error => {
                res.json({
                    message: error
                })
            })
    }

    catch (e) {
        res.json({
            error: "Sign Up Failed"
        })
    }
})

app.get("/",(req,res)=>{
   res.send("Welcome")
})



app.post("/slambook", async (req, res) => {
   
 try {

     const slamBook = new SlamBook({
          q1:req.body.q1,
          q2:req.body.q2,
          q3:req.body.q3,
          q4:req.body.q4,
          q5:req.body.q5,
          q6:req.body.q6,
          q7:req.body.q7,
          q8:req.body.q8,
          q9:req.body.q9,
          q10:req.body.q10,
          q11:req.body.q11,
          q12:req.body.q12,
        
          
     })

     await slamBook.save()
         .then(data => {

             res.json({
                 message: "Done"
             })
         })
         .catch(error => {
             res.json({
                 message: error
             })
         })
 }

 catch (e) {
     res.json({
         error: "Sign Up Failed"
     })
 }
})








app.listen(port, function () {
    console.log("Server is listening at port:" + port);

})

