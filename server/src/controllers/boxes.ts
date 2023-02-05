import express from "express";

export const getBoxes = async (req: express.Request, res: express.Response) => {
  res.json({ box1: {}, box2: {} });
};
