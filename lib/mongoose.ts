import mongoose from "mongoose";
import { string } from "zod";

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URL) return console.log("MONGODB_URL not found");
  if (isConnected) return console.log("Already Connected To MongoDB");

  try {
    await mongoose.connect(`${process.env.MONGODB_URL}`, {
      dbName: "Threads_clone",
    });
    isConnected = true;
    console.log("Connected To MongoDB");
  } catch (error) {
    console.log(error);
  }
};
