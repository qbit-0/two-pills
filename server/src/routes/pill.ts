import Pill from "@/models/pill";
import { Router } from "express";

const router = Router();

const urlRegrex =
  /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

router.put("/:pillId", async (req, res) => {
  const pillId = Number(req.params.pillId);
  const url = req.body.url;
  const label = req.body.label;

  if (!url) return res.status(400).send({ error: "Url is empty" });
  if (!label) return res.status(400).send({ error: "Label is empty" });

  if (!url.match(urlRegrex))
    return res.status(400).send({ error: "Url invalid" });

  const pill = await Pill.findOne({ pillId });
  if (!pill) return res.status(400).send({ error: "Pill not found" });
  await pill.update({ url, label, replaceCount: pill.replaceCount + 1 });

  return res.send();
});

router.get("/:pillId", async (req, res) => {
  const pillId = Number(req.params.pillId);
  const pill = await Pill.findOne({ pillId });
  if (!pill) return res.status(400).send({ error: "Pill not found" });
  return res.json(pill);
});

router.post("/:pillId/pick", async (req, res) => {
  const pillId = Number(req.params.pillId);
  const pill = await Pill.findOne({ pillId });
  if (!pill) return res.status(400).send({ error: "Pill not found" });
  await pill.update({ pickCount: pill.pickCount + 1 });
  return res.send();
});

export default router;
