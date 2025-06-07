import { create } from "zustand";
import { persist } from "zustand/middleware";

type UserStatus = "ACTIVE"              // 활성
                | "SUSPENDED"           // 정지
                | "DELETED"             // 탈퇴
                | "PENDING"             // 매니저 승인대기
                | "REJECTED"            // 매니저 승인거절
                | "TERMINATION_PENDING" // 매니저 계약해지대기
                | "TERMINATED"          // 매니저 계약해지
                ;

interface UserState {
  email: string | null;
  userName: string | null;
  status: string | null;
  setUser: (email: string, userName: string, status: string) => void;
  clearUser: () => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      email: null,
      userName: null,
      status: null,
      setUser: (email, userName, status) => set({ email, userName, status }),
      clearUser: () => set({ email: null, userName: null, status: null }),
    }),
    { name: "user-storage" }
  )
);