const express = require('express')
const router  = express.Router();

const getShoe = require("../controller/shoeController")

router.get("/shoe",getShoe);

module.exports= router;