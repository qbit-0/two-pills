import Pill from "@/models/pill";
import { Router } from "express";
const router = Router();

const pills: Pill[] = [
  {
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    label: "Not a Rickroll",
    pickCount: 0,
    replaceCount: 0,
  },
  {
    url: "https://www.google.com/",
    label: "Totally a Rickroll",
    pickCount: 0,
    replaceCount: 0,
  },
];

const urlRegrex =
  /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

router.all("/:id", (req, res, next) => {
  const id = Number(req.params.id);

  if (id < 0 || id >= pills.length)
    return res.status(400).send({ error: "Id out of bounds" });

  next();
});

router.put("/:id", (req, res) => {
  const id = Number(req.params.id);
  const url = req.body.url;
  const label = req.body.label;

  if (!url) return res.status(400).send({ error: "Url is empty" });
  if (!label) return res.status(400).send({ error: "Label is empty" });

  if (!url.match(urlRegrex))
    return res.status(400).send({ error: "Url invalid" });

  pills[id].url = url;
  pills[id].label = label;
  pills[id].replaceCount++;

  return res.send();
});

router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  return res.json(pills[id]);
});

router.post("/:id/pick", (req, res) => {
  const id = Number(req.params.id);
  pills[id].pickCount++;
  return res.send();
});

router.get("/:id/url-redirect", (req, res) => {
  const id = Number(req.params.id);
  return res.redirect(pills[id].url);
});

export default router;
