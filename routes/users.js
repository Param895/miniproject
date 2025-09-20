const express = require('express');
const path = require('path');
const rootdir = require('../util/path');

const router = express.Router();

router.get('/users',(req, res)=>{
    res.sendFile(path.join(rootdir,"views","user.html"));
})

router.post('/adduser',(req, res)=>{
    console.log("New user added", req.body);
    res.redirect("/users");
})

module.exports = router;