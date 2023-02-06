"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const boxes_1 = require("@/controllers/boxes");
const router = (0, express_1.Router)();
router.get("/", boxes_1.getBoxes);
exports.default = router;
