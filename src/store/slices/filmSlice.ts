import { StateCreator } from "zustand";
import { FilmState, StoreState } from "../types";

export const createFilmSlice: StateCreator<StoreState, [], [], FilmState> = (
  set
) => ({
  currentPage: 1,
  entriesPerPage: 10,
  setCurrentPage: (page) =>
    set((state) => ({ film: { ...state.film, currentPage: page } })),
  setEntriesPerPage: (count) =>
    set((state) => ({ film: { ...state.film, entriesPerPage: count } })),
});
