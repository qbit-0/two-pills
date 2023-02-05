import { Router } from "express";

const router = Router();

router.get("/", (req, res, next) => {
  res.json({ box1: {}, box2: {} });
});

export default router;
