import expressAsyncHandler from "express-async-handler";
import { User } from "../models/userModel";
import bcrypt from "bcryptjs";
import { sign } from "jsonwebtoken";

const secret = (): string => {
  let newSecret = process.env.JWT_SECRET;
  if (typeof newSecret !== "string") {
    throw new Error("JWT Secret invalid");
  } else return newSecret;
};

//Generate JWT
const generateToken = (id: string) => {
  return sign({ id }, secret(), {
    expiresIn: "30d",
  });
};

// Register new user
// POST /api/users
export const registerUser = expressAsyncHandler(async (req, res) => {
  const { userName, email, password } = req.body;

  if (!userName || !email || !password) {
    res.status(400);
    throw new Error("Please add all fields");
  }
  // Check if user exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists.");
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create user
  const user = await User.create({
    userName,
    email,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      userName: user.userName,
      email: user.email,
      token: generateToken(user.userName),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});
