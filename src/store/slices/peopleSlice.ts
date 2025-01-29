import { StateCreator } from "zustand";
import { PeopleState, StoreState } from "../types";

export const createPeopleSlice: StateCreator<
  StoreState,
  [],
  [],
  PeopleState
> = (set) => ({
  filters: undefined,
  setFilters: (filters) =>
    set((state) => ({ people: { ...state.people, filters } })),
  currentPage: 1,
  entriesPerPage: 10,
  setCurrentPage: (page) =>
    set((state) => ({ people: { ...state.people, currentPage: page } })),
  setEntriesPerPage: (count) =>
    set((state) => ({ people: { ...state.people, entriesPerPage: count } })),
});
