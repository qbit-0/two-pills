import { Router } from "express";
import boxes from "@/routes/boxes";

const router = Router();

router.use("/boxes", boxes);

export default router;
