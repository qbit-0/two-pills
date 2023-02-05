import { Router } from "express";
import boxesRouter from "./boxes.js";

const router = Router();

router.use("/boxes", boxesRouter);

export default router;
