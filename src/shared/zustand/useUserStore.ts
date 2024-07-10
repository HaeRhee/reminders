import { create } from "zustand";

type UserType = {
  nickname: string;
  setUserNickname: (nickname: string) => void;
};

const userState = {
  nickname: "",
};

export const useTokenStore = create<UserType>((set) => ({
  ...userState,
  setUserNickname: (nickname: string) => {
    set({ nickname });
  },
}));
