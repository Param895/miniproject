const express = require('express');
const path = require('path');
const rootdir = require('../util/path');

const router = express.Router();

router.get('/',(req, res, next)=>{
    res.sendFile(rootdir,"views","course.html");
})

router.get('/addcourse',(req, res)=>{
    // to send static file
    res.sendFile(rootdir, "views", "addcourse.html");
})

router.post('/addcourse',(req, res)=>{
    console.log("New course added",req.body);
    res.redirect("/course");
})
exports.module = router;

