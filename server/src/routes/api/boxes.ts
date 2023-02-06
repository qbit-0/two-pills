import { Router } from "express";
import { getBoxes, replaceBox, replaceBoxes } from "@/controllers/boxes";

const router = Router();

router.get("/", getBoxes);

router.post("/", replaceBoxes);

router.post("/:id", replaceBox);

export default router;
