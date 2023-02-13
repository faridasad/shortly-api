import { config } from "dotenv";
config();
import express from "express";
import UrlRouter from "./routes/UrlRoutes";
import { connectDB } from "./db";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/url", UrlRouter);

connectDB(process.env.MONGO_URI!);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen({ port: parseInt(process.env.PORT!) }, () => {
  console.log(`Server is running`);
});
