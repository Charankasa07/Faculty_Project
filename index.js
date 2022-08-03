const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const fd = express();
const fdroutes=require('./routes/fdroutes');

mongoose.connect('mongodb://localhost:27017/FacultyDetails',{useNewUrlParser:true},console.log("Connected to db"));

fd.use(bodyparser.urlencoded({extended:false}));
fd.use(bodyparser.json());


fd.use('/facultydetails',fdroutes);

fd.get('/',(req,res)=>{
	res.send("Faculty Details")
});

fd.listen(3000,console.log("Listening on port 3000"))