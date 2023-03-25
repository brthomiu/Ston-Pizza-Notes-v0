import { Request, Response } from "express";
import { CreateUserInput } from "../schema/userSchema";
import { createUser } from "../services/userService";
import sendEmail from "../utils/mailer";
import _default from "../config/default";

// Validates User request object against Zod schema
// Calls createUser from userService if validation succeeds

export async function createUserHandler(
  req: Request<{}, {}, CreateUserInput>,
  res: Response
) {
  const body = req.body;

  try {
    const user = await createUser(body);

    // Call mailer utility to send verification email for account creation
    // ***Currently sends a test email***
    await sendEmail({
      from: _default.TEST_EMAIL_FROM,
      to: user.email,
      subject: "Please verify your account",
      text: `Verification code: ${user.verificationCode} ID: ${user._id}`,
    });

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
