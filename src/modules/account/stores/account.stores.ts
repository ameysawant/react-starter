import { create } from "zustand";

export interface AccountState {
  [key: string]: unknown;
}

export const useAccountStore = create<AccountState>(() => ({}));
