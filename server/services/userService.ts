import UserModel, { User } from "../models/userModel";

// Create user function, used by userController

export function createUser(input: Partial<User>) {
  console.log("creating user:", UserModel)
  return UserModel.create(input);
};
