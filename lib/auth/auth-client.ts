import { createAuthClient } from "better-auth/react";
// import { auth } from "./auth";

export const authClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_BETTER_AUTH_URL!,
});

export const { signIn, signUp, signOut, useSession } = authClient;
