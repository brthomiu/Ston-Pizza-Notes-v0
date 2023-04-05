import express, { Request, Response } from "express";
import { registerUser } from "../controllers/userController";

const router = express.Router();

router.post("/api/users", registerUser);

router.get("/api/users", (req: Request, res: Response) => {
  res.send("This is not the way to register!!");
});

export default router;
