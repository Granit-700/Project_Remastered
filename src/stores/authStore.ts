import { create } from "zustand";
import type { SignInRequest, SignInResponse, SignInTwoFAResponse } from "../types/auth/auth";
import { api } from "./api";

interface State {
  accessToken: string | null;
  userId: number | null;
  name: string | null;
  email: string | null;
  error: any;
  signIn: (credentials: SignInRequest) => Promise<void>;
}

export const useAuthStore = create<State>((set) => {

  const accessToken = localStorage.getItem("accessToken");
  const userId = Number(localStorage.getItem("userId")) || null;
  const name = localStorage.getItem("name");
  const email = localStorage.getItem("email");

  const saveAuthData = (
    data: {
      access?: string;
      user_id?: number;
      username?: string;
      email?: string;
    }) => {

    if (data.access !== undefined) {
      if (data.access === null) {
        localStorage.removeItem("access");
      } else localStorage.setItem("access", data.access);
    };

    if (data.user_id !== undefined) {
      if (data.user_id === null) {
        localStorage.removeItem("user_id");
      } else localStorage.setItem("user_id", String(data.user_id));
    };

    if (data.username !== undefined) {
      if (data.username === null) {
        localStorage.removeItem("username");
      } else localStorage.setItem("username", data.username);
    };

    if (data.email !== undefined) {
      if (data.email === null) {
        localStorage.removeItem("email");
      } else localStorage.setItem("email", data.email);
    };

    set((store) => ({
      accessToken: data.access ?? store.accessToken,
      userId: data.user_id ?? store.userId,
      name: data.username ?? store.name,
      email: data.email ?? store.email,
    }));
  };

  return {
    accessToken,
    userId,
    name,
    email,
    error: null,
    signIn: async (credentials) => {
      set({ error: null });
      try {
        const { data } = await api.post<SignInResponse | SignInTwoFAResponse>(
          "/api/user/login/", credentials
        );
        console.log(data);
        // изменить позже
        if ("access" in data) {
          console.log("полные данные:", data)
          saveAuthData(data);
        } else console.log("только user_id. потом должна быть TwoFA:", data);
        // изменить позже
      } catch (e: any) {
        console.error(e?.message || e);
        set({ error: e?.message || e });
      }
    },
  };
});

export const useError = () => useAuthStore((store) => store.error);

export const useSignIn = () => useAuthStore((store) => store.signIn);
