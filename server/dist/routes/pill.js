"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pill_1 = __importDefault(require("../models/pill"));
const express_1 = require("express");
const router = (0, express_1.Router)();
const urlRegrex = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;
router.get("/:pillId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const pillId = Number(req.params.pillId);
    const pill = yield pill_1.default.findOne({ pillId });
    if (!pill)
        return res.status(400).send({ error: "Pill not found" });
    return res.json(pill);
}));
router.post("/:pillId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const pillId = Number(req.params.pillId);
    const url = req.body.url;
    const label = req.body.label;
    if (!url)
        return res.status(400).send({ error: "Url is empty" });
    if (!label)
        return res.status(400).send({ error: "Label is empty" });
    if (!url.match(urlRegrex))
        return res.status(400).send({ error: "Url invalid" });
    if (label.length > 280)
        return res.status(400).send({ error: "Label too long" });
    const pill = yield pill_1.default.findOne({ pillId });
    if (!pill)
        return res.status(400).send({ error: "Pill not found" });
    yield pill.updateOne({ url, label, replaceCount: pill.replaceCount + 1 });
    return res.send();
}));
router.post("/:pillId/pick", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const pillId = Number(req.params.pillId);
    const pill = yield pill_1.default.findOne({ pillId });
    if (!pill)
        return res.status(400).send({ error: "Pill not found" });
    yield pill.updateOne({ pickCount: pill.pickCount + 1 });
    return res.send();
}));
exports.default = router;
