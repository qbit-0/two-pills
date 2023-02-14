"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pill_1 = __importDefault(require("../routes/pill"));
const router = (0, express_1.Router)();
router.use("/pill", pill_1.default);
exports.default = router;
