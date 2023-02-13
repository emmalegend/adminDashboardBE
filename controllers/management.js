import mongoose from "mongoose";
import User from "../models/User.js ";
export const getAdmins = async (req, res) => {
  try {
    const admins = User.find({ role: "admins" }).select("-password");
    res.status(200).json(admins);
  } catch (error) {
    res.status(200).json({ message: error.message });
  }
};
