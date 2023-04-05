import express, { Request, Response } from "express";

const router = express.Router();

router.post("/api/login", );

router.get("/api/login", (req: Request, res: Response) => {
  res.send("This is not the way to log in!!");
});

export default router;
