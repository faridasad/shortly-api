import { config } from "dotenv";
config();
import express from "express";
import UrlRouter from "./routes/UrlRoutes";
import ShortUrlRouter from "./routes/ShortUrlRoutes";
import { connectDB } from "./utils/connectDB";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/url", UrlRouter);
app.use("/", ShortUrlRouter);

connectDB(process.env.MONGO_URI!).then(() => {
  console.log("Connected to DB");
});

app.get("/", (req, res) => {
  res.redirect("Hi Mom!");
});

app.listen({ port: parseInt(process.env.PORT!) }, () => {
  console.log(`Server is running`);
});
