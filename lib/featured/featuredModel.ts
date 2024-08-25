import mongoose, { Schema, models } from "mongoose";
import { connectDB } from "../database";

connectDB();

const featuredSchema = new Schema<featuredType>(
  {
    data: [{id:{type:String,required:true
    },url:{type:String,required:true} }],
    type:{required:true,type:String}
   
  },
  { timestamps: true }
);

export default models.Featured || mongoose.model<featuredType>("Featured", featuredSchema);
