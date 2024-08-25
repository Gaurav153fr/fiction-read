import mongoose, { Schema, models } from "mongoose";
import { connectDB } from "../database";

interface userType extends mongoose.Document {
  email: string;
  name: string;
  points: number;
  admin: boolean;
  purchased: string[];
}

// Ensure database is connected before defining the model
connectDB().catch(err => {
  console.error("Failed to connect to the database:", err);
});

const userSchema = new Schema<userType>(
  {
    email: { type: String, required: true },
    name: { type: String, required: true },
    points: { type: Number, required: true },
    admin: { type: Boolean, required: true },
    purchased: [{ type: String }],
  },
  { timestamps: true }
);

// Check if the model already exists before creating it
const User = models.User || mongoose.model<userType>("User", userSchema);

export default User;
