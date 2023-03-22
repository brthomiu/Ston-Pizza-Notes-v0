import { object, string, TypeOf } from "zod";

// Zod schema

export const createUserSchema = object({
  body: object({
    firstName: string({
      required_error: "First name is required.",
    }),
    lastName: string({
      required_error: "Last name is required.",
    }),
    password: string({
      required_error: "Password is required.",
    }).min(6, "Password is too short - minimum of 6 characters required."),
    passwordConfirmation: string({
      required_error: "Please confirm your password.",
    }),
    email: string({
      required_error: "Email is required",
    }).email("Not a valid email address."),
  }).refine((data) => data.password === data.passwordConfirmation, {
    message: "Passwords do not match",
    path: ["passwordConfirmation"],
  }),
});

export type CreateUserInput = TypeOf<typeof createUserSchema>["body"];
