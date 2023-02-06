import { Router } from "express";
import boxes from "@/routes/api/boxes";

const router = Router();

router.use("/boxes", boxes);

export default router;
