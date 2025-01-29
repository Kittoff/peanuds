import { create } from "zustand";
import { createPeopleSlice } from "./slices/peopleSlice";
import { createFilmSlice } from "./slices/filmSlice";
import { StoreState } from "./types";

export const useBoundStore = create<StoreState>()((...a) => ({
  people: createPeopleSlice(...a),
  film: createFilmSlice(...a),
}));
