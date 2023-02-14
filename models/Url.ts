import mongoose from "mongoose";

export interface IURL extends mongoose.Document {
  url: string;
  shortUrl: string;
}

const UrlSchema = new mongoose.Schema(
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

const Url = mongoose.model<IURL>("Url", UrlSchema, "Links");
export default Url;
