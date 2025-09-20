const express = require('express');
const path = require('path');
const rootdir = require('../util/path');

const router = express.Router();

router.get('/',(req, res,)=>{
    res.sendFile(rootdir,"views","course.html");
})

router.get("/addcourse",(req, res)=>{
    // to send static file
    res.sendFile(rootdir, "views", "addcourse.html");
})

router.post('/course',(req, res)=>{
    console.log("New course added",req.body);
    res.redirect("/course");
})

module.exports= router;

