"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/boxes", (req, res, next) => {
    res.json({ box1: {}, box2: {} });
});
module.exports = router;
