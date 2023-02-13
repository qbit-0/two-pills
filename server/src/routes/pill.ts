import { Router } from "express";
const router = Router();

type Pill = {
  url: string;
  label: string;
};

const pills: Pill[] = [
  {
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    label: "Not a Rickroll",
  },
  { url: "https://www.google.com/", label: "Totally a Rickroll" },
];

const urlRegrex =
  /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

router.put("/:id", (req, res) => {
  const id = Number(req.params.id);
  const url = req.body.link;
  const label = req.body.label;

  if (id < 0 || id >= pills.length)
    return res.status(400).send({ error: "Id out of bounds" });

  if (!url) return res.status(400).send({ error: "Url is empty" });
  if (!label) return res.status(400).send({ error: "Label is empty" });

  if (!url.match(urlRegrex))
    return res.status(400).send({ error: "Url invalid" });

  pills[id].url = url;
  pills[id].label = label;

  return res.send();
});

router.get("/:id/label", (req, res) => {
  const id = Number(req.params.id);

  if (id < 0 || id >= pills.length)
    return res.status(400).send({ error: "Id out of bounds" });

  return res.json({ label: pills[id].label });
});

router.get("/:id/url", (req, res) => {
  const id = Number(req.params.id);

  if (id < 0 || id >= pills.length)
    return res.status(400).send({ error: "Id out of bounds" });

  return res.redirect(pills[id].url);
});

export default router;
