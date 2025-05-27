import { create } from "zustand";
import { persist } from "zustand/middleware";

type Role = "CUSTOMER" | "MANAGER" | "ADMIN" | null;

interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;
  role: Role;
  setTokens: (access: string, refresh: string, role: Role) => void;
  clearTokens: () => void;
  isLoggedIn: () => boolean;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      accessToken: null,
      refreshToken: null,
      role: null,
      setTokens: (access, refresh, role) =>
        set({ accessToken: access, refreshToken: refresh, role }),
      clearTokens: () =>
        set({ accessToken: null, refreshToken: null, role: null }),
      isLoggedIn: () => !!get().accessToken,
    }),
    { name: "auth-storage" }
  )
);