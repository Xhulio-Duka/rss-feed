import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { feedRouter } from "./routes/feed-routes";

dotenv.config({
  path: ".env.local",
});

const port = parseInt(process.env.PORT || "4000");
const hostname = process.env.HOSTNAME || "localhost";

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:5173",
  }),
);

app.use("/api/v1/feed", feedRouter);

app.get("/{*splat}", (req: Request, res: Response) => {
  res
    .status(404)
    .json({ message: "Route not found, data available at /api/v1/feed" });
});

app.listen(port, hostname, () => {
  console.log(`Server running on: http://${hostname}:${port}`);
});
