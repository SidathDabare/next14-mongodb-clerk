"use server";

import User from "@/lib/modals/user.modal";
import { connectDB } from "@/lib/db";

export async function createUser(user: any) {
  try {
    await connectDB();
    const newUser = await User.create(user);
    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    console.log(error);
  }
}
export async function getUserByEmail(email: string) {
  try {
    await connectDB();
    const user = await User.findOne({ email }).lean();
    return user;
  } catch (error) {
    console.log(error);
  }
}
