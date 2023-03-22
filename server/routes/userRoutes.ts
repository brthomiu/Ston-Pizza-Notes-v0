import express from "express";
import { createUserHandler } from "../controllers/userController";
import validateResource from "../middleware/validateResource";
import { createUserSchema } from "../schema/userSchema";

const router = express.Router();

router.post(
  "/api/users",
  validateResource(createUserSchema),
  createUserHandler
);

export default router;
