import { create } from "zustand";

export interface AuthState {
  [key: string]: unknown;
}

export const useAuthStore = create<AuthState>(() => ({}));
