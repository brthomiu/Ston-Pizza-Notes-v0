import UserModel, { User } from "../models/userModel";

// Create user function, used by userController

export function createUser(input: Partial<User>) {
  return UserModel.create(input);
}
