// store/slices/peopleSlice.ts
import { StateCreator } from "zustand";
import { PeopleState, StoreState } from "../types";

export const createPeopleSlice: StateCreator<
  StoreState,
  [],
  [],
  PeopleState
> = (set) => ({
  filters: {
    limit: 10,
    page: 1,
    gender: "", // valeur par défaut pour gender
  },
  setFilters: (filters) =>
    set((state) => ({ people: { ...state.people, filters } })),

  page: 1,
  limit: 10,
  setPage: (page) => set((state) => ({ people: { ...state.people, page } })),
  setLimit: (limit) => set((state) => ({ people: { ...state.people, limit } })),
  currentPage: 1,
  entriesPerPage: 10,
  setCurrentPage: (page) =>
    set((state) => ({ people: { ...state.people, currentPage: page } })),
  setEntriesPerPage: (count) =>
    set((state) => ({ people: { ...state.people, entriesPerPage: count } })),
});
