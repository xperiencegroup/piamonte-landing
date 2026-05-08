import { create } from "zustand";

export const useAmenidadesStore = create((set) => ({
  selectedScene: null,

  setSelectedScene: (scene) => set({ selectedScene: scene }),

  clearSelectedScene: () => set({ selectedScene: null }),
}));
