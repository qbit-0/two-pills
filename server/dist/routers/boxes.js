"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
/* GET users listing. */
router.get("/", function (req, res, next) {
    return res.status(200).json({ box1: { id: 1, lable: "First box" } });
});
module.exports = router;
