const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const studentSchema = new Schema(
{
fullname: {
type:String,
required:true,
trim:true,
},
age: {
type:Number,
required:true,
trim:true,
},
},
{
timestamps:true,
}
);

const Student = mongoose.model("student",studentSchema);
module.exports=Student;
student-model js
const express = require("express");
const express = require('cors');
const mongoose = require('mongoose');

require('dontenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
const uri = process.env.ATLAS_URI;
mongoose.connect(uri,{
useNewUrlParser:true,
useCreateIndex:true,
useUnifiedTopology:true,


});

const connection =mongoose.connection;
connection.once("open",()=>{
console.log('MongoDB connection is established.');
});


app.use(cors());
app.use(express.json());

app.listen(port,()=>{

console.log("Server is running in port"+ port);
});
server.,js
{
"name": "back-end",
"version": "1.0.0",
"description": "",
"main": "index.js",
"scripts": {
"test": "echo \"Error: no test specified\" && exit 1"
},
"keywords": [],
"author": "",
"license": "ISC"
}
package.json