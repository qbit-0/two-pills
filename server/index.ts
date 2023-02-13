import "module-alias/register";

import apiRouter from "@/routes/api";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.all("/", (req, res, next) => {
  console.log(req);
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
