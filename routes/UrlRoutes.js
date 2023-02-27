"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const crypto_1 = __importDefault(require("crypto"));
const Url_1 = __importDefault(require("../models/Url"));
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const UrlRouter = (0, express_1.Router)();
UrlRouter.get("/", (req, res) => {
    res.send("Shortly API");
});
UrlRouter.post("/new", (req, res) => {
    const { url } = req.body;
    const hash = crypto_1.default.randomBytes(5).toString("hex");
    const shortUrl = `${process.env.BASE_URL}/${hash}`;
    const newUrl = new Url_1.default({
        url,
        shortUrl,
    });
    newUrl.save((err, url) => {
        if (err) {
            console.log(err);
            res.status(500).send("Server error");
        }
        else {
            res.status(201).json(url);
        }
    });
});
exports.default = UrlRouter;
