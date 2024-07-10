import { create } from "zustand";

type TokenType = {
  isLoggedIn: boolean;
  accessToken: string;
  setTokenData: (isLoggedIn: boolean, accessToken: string) => void;
};

const tokenState = {
  isLoggedIn: false,
  accessToken: "",
};

export const useTokenStore = create<TokenType>((set) => ({
  ...tokenState,
  setTokenData: (isLoggedIn: boolean, accessToken: string) => {
    set({ isLoggedIn, accessToken });
  },
}));
