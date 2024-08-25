import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // Listen for connection events only once to avoid potential memory leaks
    mongoose.connection.once("connected", () => {
      console.log("Database connected successfully.");
    });

    mongoose.connection.once("error", (err) => {
      console.error("Database connection error:", err);
    });

    // Connect to the MongoDB database
    await mongoose.connect(process.env.MONGODB_URI!);
  } catch (err) {
    console.error("Database connection failed:", err);
  }
};

export { connectDB };
