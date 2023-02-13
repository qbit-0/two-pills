import "module-alias/register";
import dotenv from "dotenv";
dotenv.config();

import apiRouter from "@/routes/api";
import cors from "cors";
import express from "express";
import connectMongoose from "@/models/mongo";

connectMongoose();

const app = express();

app.use(express.json());
app.use(cors());

app.all("/", (req, res, next) => {
  console.log(req.url, req.params, req.query, req.body);
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
