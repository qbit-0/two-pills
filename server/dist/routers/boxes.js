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
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
;
const boxes = [
    { label: "First box", link: "https://github.com/DuyAndShin/Two-Boxes" },
    { label: "Secend box", link: "https://github.com/DuyAndShin" }
];
//const regex = new RegExp('https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)');
const regex = new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/);
/* PUT a box. */
router.put("/:id", function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = Number(req.params.id);
        const label = req.body.label;
        const link = req.body.link;
        if (id >= boxes.length) {
            return res.status(400).send({ error: "The index is out of scope" });
        }
        else if (!link.match(regex)) {
            return res.status(400).send({ error: "The link is not valid" });
        }
        res.status(200).json(boxes[id].link);
        boxes[id].label = label;
        boxes[id].link = link;
        return;
    });
});
/* GET label of all boxes. */
router.get("/labels", function (req, res, next) {
    const labels = boxes.map((box) => box.label);
    return res.status(200).json(labels);
});
module.exports = router;
