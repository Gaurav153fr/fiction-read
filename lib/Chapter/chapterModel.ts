import mongoose, { Schema, models } from "mongoose";
import { connectDB } from "../database";

connectDB();

const chapterSchema = new Schema<chapterType>(
  {
    no: { type: Number, required: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
    series: { type: String, required: true },
    premium: { type: Boolean, required: true },
    thumbnail: { type: String, required: true },
  },
  { timestamps: true }
);

export default models.Chapter ||
  mongoose.model<chapterType>("Chapter", chapterSchema);
