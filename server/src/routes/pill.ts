import Pill from "../models/pill";
import { Router } from "express";

const router = Router();

const urlRegrex =
  /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;

router.get("/:pillId", async (req, res) => {
  const pillId = Number(req.params.pillId);
  const pill = await Pill.findOne({ pillId });
  if (!pill) return res.status(400).send({ error: "Pill not found" });

  console.log("sending pill", pill);
  return res.json(pill);
});

router.post("/:pillId", async (req, res) => {
  const pillId = Number(req.params.pillId);
  const url = req.body.url;
  const label = req.body.label;

  if (!url) return res.status(400).send({ error: "Url is empty" });
  if (!label) return res.status(400).send({ error: "Label is empty" });

  if (!url.match(urlRegrex))
    return res.status(400).send({ error: "Url invalid" });
  if (label.length > 280)
    return res.status(400).send({ error: "Label too long" });

  const pill = await Pill.findOne({ pillId });
  if (!pill) return res.status(400).send({ error: "Pill not found" });

  await pill.updateOne({ url, label, replaceCount: pill.replaceCount + 1 });

  return res.send();
});

router.post("/:pillId/pick", async (req, res) => {
  const pillId = Number(req.params.pillId);
  const pill = await Pill.findOne({ pillId });
  if (!pill) return res.status(400).send({ error: "Pill not found" });
  await pill.updateOne({ pickCount: pill.pickCount + 1 });
  return res.send();
});

export default router;
