import { Router } from "express";
import crypto from "crypto";
import Url from "../models/Url";
import { config } from "dotenv";
config();

const UrlRouter = Router();

UrlRouter.get("/", (req, res) => {
  res.send("Shortly API");
});


UrlRouter.post("/new", (req, res) => {
  const { url } = req.body;
  const hash = crypto.randomBytes(5).toString("hex");
  const shortUrl = `${process.env.BASE_URL}/${hash}`;
  const newUrl = new Url({
    url,
    shortUrl,
  });

  newUrl.save((err, url) => {
    if (err) {
      console.log(err);
      res.status(500).send("Server error");
    } else {
      res.status(201).json(url);
    }
  });
});

export default UrlRouter;
