import { create } from "zustand";

export const useRutasStore = create((set) => ({
  rutaHovered: null,
  showDirections: false,

  setRutaHovered: (ruta) => set({ rutaHovered: ruta }),
  setShowDirections: (value) => set({ showDirections: value }),
}));
