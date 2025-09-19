const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const courseRoute = require('./routes/course');
const userRoute = require('./routes/users');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, "public")));  

app.use('/info', courseRoute);
app.use('/detective', userRoute);

app.get('/',(req, res)=>{
    res.sendFile(path.join(__dirname,"views","index.html"));
})
 
app.get('/',(req, res)=>{
    res.status(404).sendFile(path.join(__dirname,"views","404.html"));
});

app.listen(PORT,()=>{
    console.log(`server is running on $(PORT)`);
})

