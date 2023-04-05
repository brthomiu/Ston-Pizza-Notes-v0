import express, { Request, Response } from "express";
import { loginUser } from "../controllers/userController";

const router = express.Router();

router.post("/api/login", loginUser);

router.get("/api/login", (req: Request, res: Response) => {
  res.send("This is not the way to log in!!");
});

export default router;
