import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import router from "./routes";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api", router);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
