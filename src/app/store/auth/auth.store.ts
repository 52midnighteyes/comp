import { create } from "zustand";
export interface IUser {
  firstname: string;
  lastname: string;
  email: string;
  role: string;
}

type AuthState = {
  user: IUser | null;
  isLogin: boolean;
};

type AuthAction = {
  onAuthSuccess: (user: IUser) => void;
  clearAuth: () => void;
};

type AuthStore = AuthAction & AuthState;

const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  isLogin: false,
  onAuthSuccess: (payload) => {
    set(() => ({ user: payload, isLogin: true }));
    localStorage.setItem("name", payload?.firstname + payload?.lastname);
  },
  clearAuth: () => set(() => ({ user: null, isLogin: false })),
}));

export default useAuthStore;
