const express=require("express");
const app=express()
require('dotenv').config()
const dbConfig=require("./config/dbConfig")
app.use(express.json());
const studentRoute = require('./routes/studentRoute');

app.use('/api/students', studentRoute);

const port=process.env.PORT || 5000;

app.listen(port,()=> console.log(`Project server started at port ${port}`));