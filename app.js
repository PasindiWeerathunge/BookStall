const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use('/',(req,res,next)=> {
    res.send("this is starting application");
});

mongoose.connect(
    "mongodb+srv://DMppw96:ka003pa005@bookstall.y78g0.mongodb.net/bookStalldb?retryWrites=true&w=majority"
    )
    .then(()=>console.log("Connected to DB"))
    .then(()=>{
        app.listen(5000);
    }).catch((err)=>console.log(err));

