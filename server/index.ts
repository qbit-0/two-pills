
import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import path from "path";
import cors from "cors";

dotenv.config();

const app: Express = express();

app.use(express.json());
app.use(cors());

app.get('/api', (req: Request, res: Response) => {
  return res.status(200).json({message: "Hello world from backend!"})
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});