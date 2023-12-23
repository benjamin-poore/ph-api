import express, { Request, Response } from "express";
import path from "path";

const app = express();

app.use(express.static("public"));

app.get("/test", (_req: Request, res: Response) => {
  res.status(200).send("Hello world");
});

app.get("/", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

export default app;
