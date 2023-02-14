import { Router } from "express";
import Url from "../models/Url";
import {config} from "dotenv";
config();

const ShortUrlRouter = Router();

ShortUrlRouter.get("/:hash", (req, res) => {
  const { hash } = req.params;
  Url.findOne({ shortUrl: `${process.env.BASE_URL}/${hash}` })
    .then((url) => {
      let fullUrl = url!.url;
      if (!fullUrl.startsWith("http://") && !fullUrl.startsWith("https://")) {
        fullUrl = "http://" + fullUrl;
      }
      res.redirect(fullUrl);
    })
    .catch((err) => {
      res.status(500).send("Server error");
    });
});

export default ShortUrlRouter;
