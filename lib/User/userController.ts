"use server";
import userModel from "./userModel";

// Define a custom error class for more specific error handling
class UserError extends Error {
  constructor(message: any) {
    super(message);
    this.name = "UserError";
  }
}

async function createUser(name: string, email: string) {
  try {
    if (!name || !email) {
      throw new UserError("Invalid input data");
    }

    const user = await userModel.findOne({ email, name });

    if (user !== null) {
      console.log("User already exists");
      return { success: false, message: "User already exists" };
    } else {
      const data = {
        email,
        name,
        points: 50,
        admin: false,
        purchased: [],
      };
      await userModel.create(data);
      console.log("New user created");

      return { success: true, message: "New user created" };
    }
  } catch (err: any) {
    console.error("Error creating user:", err);
    return { success: false, message: err.message };
  }
}

async function getUser(email: string, name: string) {
  try {
    if (!email || !name) {
      throw new UserError("Invalid input data");
    }

    const user = await userModel.findOne({ email, name }).lean<userType>();

    if (user != null) {
      const data:userType = {
        _id: user._id.toString(),
        email: user.email,
        name: user.name,
        points: user.points,
        purchased: user.purchased,
        admin: user.admin,
      };
     

      return data;
    } else {
      console.log("User not found");
      return null
    }
  } catch (err: any) {
    console.error("Error fetching user:", err);
    return null
  }
}

async function buyChapter(id: string, points: number, chapter_id: string) {
  if (points > 5) {
    console.log(id, chapter_id);

    const data = await userModel.findByIdAndUpdate(
      id,
      { $push: { purchased: chapter_id }, $inc: { points: -5 } },
      { new: true } // This option returns the modified document.
    );
  }
}
export { createUser, getUser, buyChapter };
