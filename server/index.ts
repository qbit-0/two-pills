import "module-alias/register";

import router from "@/routes";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  return res.send("<h1>Backend for Two Pills App</h1>");
});

app.use("/api", router);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
