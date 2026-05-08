import { create } from "zustand";

export const useRutasStore = create((set) => ({
  rutaHovered: null,

  setRutaHovered: (ruta) => set({ rutaHovered: ruta }),
}));
