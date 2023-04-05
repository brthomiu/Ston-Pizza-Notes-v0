import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import connectToDb from "./utils/connectToDb";
import log from "./utils/logger";
import router from "./routes";

dotenv.config({ path: "./.env" });

const app: Express = express();
const port = process.env.PORT;

// Middleware for handling JSON requests, called before router
app.use(express.json());

// Express router
app.use(router);

// Routes
app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  log.info(`⚡️[server]: Server is running at http://localhost:${port}`);

  // Connect to DB
  connectToDb();
});
