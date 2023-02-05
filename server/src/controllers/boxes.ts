import { Request, Response } from "express";

export const getBoxes = async (req: Request, res: Response) => {
  res.json({ box1: {}, box2: {} });
};
