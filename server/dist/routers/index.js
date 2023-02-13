"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const boxesRouter = require('./boxes.js');
const router = (0, express_1.Router)();
router.use('/boxes', boxesRouter);
module.exports = router;
