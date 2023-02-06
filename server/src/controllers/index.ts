import { Request, Response } from "express";

export const getRoot = (req: Request, res: Response) => {
  res.send("<h1>Backend for Two Boxes App.</h1>");
};
