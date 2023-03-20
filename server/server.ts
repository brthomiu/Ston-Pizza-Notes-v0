import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import connectToDb from "./utils/connectToDb";
import log from "./utils/logger";
import router from './routes'

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(router)

// Routes
app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  log.info(`⚡️[server]: Server is running at http://localhost:${port}`);

  connectToDb();
});
