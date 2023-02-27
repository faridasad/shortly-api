"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const express_1 = __importDefault(require("express"));
const UrlRoutes_1 = __importDefault(require("./routes/UrlRoutes"));
const ShortUrlRoutes_1 = __importDefault(require("./routes/ShortUrlRoutes"));
const connectDB_1 = require("./utils/connectDB");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use("/api/url", UrlRoutes_1.default);
app.use("/", ShortUrlRoutes_1.default);
(0, connectDB_1.connectDB)(process.env.MONGO_URI).then(() => {
    console.log("Connected to DB");
});
app.get("/", (req, res) => {
    res.redirect("Hi Mom!");
});
app.listen({ port: parseInt(process.env.PORT) }, () => {
    console.log(`Server is running`);
});
