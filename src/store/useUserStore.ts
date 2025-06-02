import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UserState {
  email: string | null;
  userName: string | null;
  setUser: (email: string, userName: string) => void;
  clearUser: () => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      email: null,
      userName: null,
      setUser: (email, userName) => set({ email, userName }),
      clearUser: () => set({ email: null, userName: null }),
    }),
    { name: "user-storage" }
  )
);