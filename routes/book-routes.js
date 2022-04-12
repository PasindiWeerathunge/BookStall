const express = require("express");
const router = express.Router();
const Book = require("../models/book");
const bookcontroller  = require ("../controllers/book-controller");


router.get("/",bookcontroller.getAllBooks);
    

module.exports = router;