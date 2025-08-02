const express = require("express");
const userRegistration= require("../Controllers/userRegisteration")
const userLogin = require("../Controllers/userLogin");
const getUsers = require("../Controllers/getUsers");

const router = express.Router();
router.post("/Registration",userRegistration);
router.post("/Login",userLogin);
router.get("/", getUsers);

module.exports=router