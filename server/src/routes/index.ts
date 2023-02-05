import { Router } from "express";
import boxesRouter from "@/routes";

const router = Router();

router.use("/boxes", boxesRouter);

export default router;
