import express from "express";
import { getAllFeed } from "../controllers/get-all-feed";

export const feedRouter = express.Router();

feedRouter.get("/", getAllFeed);
