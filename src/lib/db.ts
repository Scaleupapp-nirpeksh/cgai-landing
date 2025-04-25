import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI!; // loaded from .env.local

export async function connect() {
  if (mongoose.connection.readyState >= 1) return;

  return mongoose.connect(MONGODB_URI, {
    dbName: "creator-genius",
  });
}
