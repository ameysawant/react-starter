import { create } from "zustand";

export interface HomeState {
  [key: string]: unknown;
}

export const useHomeStore = create<HomeState>(() => ({}));
