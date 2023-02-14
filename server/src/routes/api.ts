import { Router } from "express";
import pillsRouter from "../routes/pill";
const router = Router();

router.use("/pill", pillsRouter);

export default router;
