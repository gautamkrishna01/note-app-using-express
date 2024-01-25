const express = require("express");
const { signIn, signup } = require("../controller/userController");
const router = express.Router();

router.post("/signin", signIn)
router.post("/signin", signup)