import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UserState {
  email: string | null;
  username: string | null;
  setUser: (email: string, username: string) => void;
  clearUser: () => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      email: null,
      username: null,
      setUser: (email, username) => set({ email, username }),
      clearUser: () => set({ email: null, username: null }),
    }),
    { name: "user-storage" }
  )
);