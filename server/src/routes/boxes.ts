import { Router } from "express";
import { getBoxes } from "@/controllers/boxes";

const router = Router();

router.get("/", getBoxes);

export default router;
