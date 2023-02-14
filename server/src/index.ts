import "module-alias/register";
import dotenv from "dotenv";
dotenv.config();

import apiRouter from "./routes/api";
import cors from "cors";
import express from "express";
import connectMongoose from "./models/mongo";
import morgan from "morgan";

connectMongoose();

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("combined"));

app.get("/", (req, res) => {
  switch (process.env.NODE_ENV) {
    case "local":
      return res.redirect(process.env.LOCAL_FRONTEND as string);
    case "production":
      return res.redirect(process.env.PRODUCTION_FRONTEND as string);
    default:
      throw new Error(`Invalid NODE_ENV, ${process.env.NODE_ENV}`);
  }
});

app.use("/api", apiRouter);

if (process.env.NODE_ENV === "local") {
  const port = process.env.PORT || 8000;
  app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });
}

export default app;
