import express from "express";
import { errorRequestHandler } from "./error";

export const createApp = () => {
  const app = express();

  app.get("/", (req, res) => {
    throw new Error("Testing errors");

    res.json({ status: "READY" });
  });

  app.use(errorRequestHandler);

  return app;
};
