

const express = require('express');
var XLSX = require('xlsx');
const app = express();
var cors = require('cors')
const port = process.env.PORT || 3800;
app.use(cors())
app.use(express.json());

app.post("/readfile",(req, res)=>{
   
    var workbook = XLSX.readFile(req.file)
    var sheet_name_list = workbook.SheetNames;
    res.send(XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]))
})
app.get("/",(req, res)=>{
    res.send("sdsds")
})
function call(){
   
var workbook = XLSX.readFile('FINAL450.xlsx');
var sheet_name_list = workbook.SheetNames;
console.log(XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]))
}

app.listen(port, function(){
    console.log("Server running on localhost:" + port);
});