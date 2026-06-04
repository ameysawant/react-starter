import { create } from "zustand";

export interface LibraryState {
  [key: string]: unknown;
}

export const useLibraryStore = create<LibraryState>(() => ({}));
