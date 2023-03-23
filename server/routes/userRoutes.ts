import express, { Request, Response } from "express";
import { createUserHandler } from "../controllers/userController";
import validateResource from "../middleware/validateResource";
import { createUserSchema } from "../schema/userSchema";


const router = express.Router();

router.post(
  "/api/users",
  validateResource(createUserSchema),
  createUserHandler
);

router.get("/api/users", (req: Request, res: Response) => {
    res.send("This is not the way to log in!!")
}) 

export default router;
