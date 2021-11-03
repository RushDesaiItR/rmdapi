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