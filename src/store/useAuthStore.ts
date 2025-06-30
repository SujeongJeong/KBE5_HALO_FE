import { create } from "zustand";
import { persist } from "zustand/middleware";

type Role = "CUSTOMER" | "MANAGER" | "ADMIN" | null;

interface AuthState {
  accessToken: string | null;
  role: Role;
  setTokens: (access: string, role: Role) => void;
  clearTokens: () => void;
  isLoggedIn: () => boolean;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      accessToken: null,
      refreshToken: null,
      role: null,
      setTokens: (access, role) =>
        set({ accessToken: access, role }),
      clearTokens: () =>
        set({ accessToken: null, role: null }),
      isLoggedIn: () => !!get().accessToken,
    }),
    { name: "auth-storage" }
  )
);