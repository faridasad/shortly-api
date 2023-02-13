import { Router } from "express";

const UrlRouter = Router();

UrlRouter.get("/", (req, res) => {
  res.send("Url");
});

export default UrlRouter;