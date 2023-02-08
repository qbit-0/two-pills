import { Router } from "express";
const router = Router();

interface Box {
  label: string;
  link: string;
}

const boxes: Box[] = [
  //initial boxes will be replaced by users
  { label: "First box", link: "https://github.com/DuyAndShin/Two-Boxes" },
  { label: "Secend box", link: "https://github.com/DuyAndShin" },
];
//const regex = new RegExp('https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)');
const regex = new RegExp(
  /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/
);

/* PUT a box. */
router.put("/:id", async function (req, res) {
  const id = Number(req.params.id);
  const label = req.body.label;
  const link = req.body.link;
  if (id >= boxes.length) {
    return res.status(400).send({ error: "The index is out of scope" });
  } else if (!link.match(regex)) {
    return res.status(400).send({ error: "The link is not valid" });
  }
  res.status(200).json(boxes[id].link);
  boxes[id].label = label;
  boxes[id].link = link;
  return;
});

/* GET label of all boxes. */
router.get("/labels", function (req, res) {
  const labels = boxes.map((box) => box.label);
  return res.status(200).json(labels);
});

export default router;
