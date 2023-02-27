"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Url_1 = __importDefault(require("../models/Url"));
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const ShortUrlRouter = (0, express_1.Router)();
ShortUrlRouter.get("/:hash", (req, res) => {
    const { hash } = req.params;
    Url_1.default.findOne({ shortUrl: `${process.env.BASE_URL}/${hash}` })
        .then((url) => {
        let fullUrl = url.url;
        if (!fullUrl.startsWith("http://") && !fullUrl.startsWith("https://")) {
            fullUrl = "http://" + fullUrl;
        }
        res.redirect(fullUrl);
    })
        .catch((err) => {
        res.status(500).send("Server error");
    });
});
exports.default = ShortUrlRouter;
