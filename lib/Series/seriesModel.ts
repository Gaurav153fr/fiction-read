import mongoose, { Schema, models } from "mongoose";
import { connectDB } from "../database";

connectDB();

const seriesSchema = new Schema<seriesType>(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    url: {
      type: String,
      required: true,
    },
    story: {
      type: String,
      required: true,
    },
    views: { type: Number, required: true },
    rating: { type: Number, required: true },
    genres: [{ type: String, required: true }],

    status: { type: String, required: true },
    updateOn:{type:Number,required:true}
  },
  { timestamps: true }
);

export default models.Series ||
  mongoose.model<seriesType>("Series", seriesSchema);
