import mongoose from "mongoose";

export const connectDB = async (url: string) => {
  mongoose.set("strictQuery", true);
  try {
    await mongoose.connect(url);
  } catch (err) {
    console.log(err);
  }
};
