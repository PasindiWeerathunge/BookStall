const express = require('express');
const mongoose = require('mongoose');
const router = require("./routes/book-routes");
const app = express();

app.use(express.json());
app.use("/books",router);

mongoose.connect(
    "mongodb+srv://DMppw96:ka003pa005@bookstall.y78g0.mongodb.net/bookStalldb?retryWrites=true&w=majority"
    )
    .then(()=>console.log("Connected to DB"))
    .then(()=>{
        app.listen(5000);
    }).catch((err)=>console.log(err));

