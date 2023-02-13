import mongoose from "mongoose";

export const UrlSchema = new mongoose.Schema(
  {
    url: {
      type: String,
      required: true,
    },
    shortUrl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
