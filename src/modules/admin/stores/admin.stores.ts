import { create } from "zustand";

export interface AdminState {
  [key: string]: unknown;
}

export const useAdminStore = create<AdminState>(() => ({}));
