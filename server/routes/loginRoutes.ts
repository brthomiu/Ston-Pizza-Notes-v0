// @ts-nocheck 
const express = require('express')
const {loginUser} = require('../controllers/userController')

// import express, { Request, Response } from "express";
// import { loginUser } from "../controllers/userController";

const router = express.Router();

router.post("/api/users/login", loginUser);

router.get("/api/users/login", (req: any, res: any) => {
  res.send("This is not the way to log in!!");
});

module.exports = router
// export default router;
