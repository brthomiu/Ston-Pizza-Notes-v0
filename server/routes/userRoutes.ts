// @ts-nocheck 
const express = require('express')
const {registerUser} = require("../controllers/userController")
const {getMe} = require("../controllers/userController")
const {protect} = require('../middleware/loginMiddleware')

// import express from "express";
// import { registerUser } from "../controllers/userController";
// import { protect } from "../middleware/loginMiddleware";
// import { getMe } from "../controllers/userController";

const router = express.Router();

router.post("/api/users", registerUser);

router.get("/me", protect, getMe)

module.exports = router
// export default router;
