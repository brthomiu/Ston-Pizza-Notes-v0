import { Request, Response } from "express";
import { CreateUserInput } from "../schema/userSchema";
import { createUser } from "../services/userService";

// Validates User request object against Zod schema
// Calls createUser from userService if validation succeeds

export async function createUserHandler(
  req: Request<{}, {}, CreateUserInput>,
  res: Response
) {
  const body = req.body;

  try {
    const user = await createUser(body);

    return res.send("New account created successfully.");
  } catch (e: any) {
    // Give specific error message if account already exists
    if (e.code === 11000) {
      return res.status(409).send("Account already exists");
    }
    // Otherwise return generic error
    return res.status(500).send(e);
  }
}
