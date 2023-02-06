"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const boxes = [
  { id: 0, label: "First box", link: "F Link" },
  { id: 1, label: "Secend box", link: "S Link" },
];
router.put("/:id", function (req, res, next) {
  return __awaiter(this, void 0, void 0, function* () {
    const id = Number(req.params.id);
    boxes[id].label = yield req.body.label;
    boxes[id].link = yield req.body.link;
    console.log(req.body);
    return res.status(200).json(boxes[id]);
  });
});
/* GET label of all boxes. */
router.get("/labels", function (req, res, next) {
  const labels = boxes.map((box) => box.label);
  return res.status(200).json(labels);
});
/* GET link. auth */
router.get("/link/:id", function (req, res, next) {
  const link = boxes[Number(req.params.id)].link;
  return res.status(200).json(link);
});
module.exports = router;
