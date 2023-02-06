import { Router } from "express";
import { getRoot } from "@/controllers";
import api from "@/routes/api";

const router = Router();

router.get("/", getRoot);

router.use("/api", api);

export default router;
