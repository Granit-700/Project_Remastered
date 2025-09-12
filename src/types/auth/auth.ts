import type { AuthToken, TwoFA, User } from "../entities";

type TwoFARequest = Pick<TwoFA, "user_id" | "otp_code">;

type TwoFAResponse = Pick<AuthToken, "refresh" | "access"> & Pick<User, "user_id" | "user_role" | "username" | "email">;

// Requests

export type SignInRequest = Pick<User, "email" | "password">;

export type SignInTwoFARequest = TwoFARequest;

export type SignUpRequest = Pick<User, "username" | "email" | "password">;

export type SignUpTwoFARequest = TwoFARequest;

export type LogOutRequest = Pick<AuthToken, "refresh">;

// Responses

export type SignInResponse = Pick<User, "user_id">;

export type SignInTwoFAResponse = TwoFAResponse;

export type SignUpResponse = Pick<User, "user_id" | "username" | "email">;

export type SignUpTwoFAResponse = TwoFAResponse & { message: string; };

export type LogOutResponse = Pick<AuthToken, "refresh">;

export type AuthResponse = AuthToken;
