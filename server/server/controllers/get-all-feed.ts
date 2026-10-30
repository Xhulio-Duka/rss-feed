import { Request, Response } from "express";
import { articles } from "./rss-parser";

export const getAllFeed = async (req: Request, res: Response) => {
  try {
    const response = await articles;

    return res.status(200).json(response);
  } catch (err: unknown) {
    if (err instanceof Error) {
      return res.status(500).json({ message: err.message });
    }
    return res.status(500).json({ message: "Internal server error" });
  }
};
