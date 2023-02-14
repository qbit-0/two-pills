import "module-alias/register";
import dotenv from "dotenv";
dotenv.config();

import apiRouter from "./routes/api";
import cors from "cors";
import express from "express";
import connectMongoose from "./models/mongo";

connectMongoose();

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: ["http://127.0.0.1:5173/", "https://two-pills.duypham.tech/"],
  })
);

app.use("/", (req, _, next) => {
  console.log(req.ip, req.url, req.query, req.body);
  next();
});

app.get("/", (req, res) => {
  return res.send("<h1>Backend for Two Pills App</h1>");
});

app.use("/api", apiRouter);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

export default app;
