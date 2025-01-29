interface GetPeopleFilters {
  limit: number;
  page: number;
  gender?: string;
}

export interface PeopleState {
  filters?: GetPeopleFilters;
  setFilters: (filters: GetPeopleFilters) => void;
  currentPage: number;
  entriesPerPage: number;
  setCurrentPage: (page: number) => void;
  setEntriesPerPage: (entriesPerPage: number) => void;
}
export interface FilmState {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  entriesPerPage: number;
  setEntriesPerPage: (entriesPerPage: number) => void;
}

export interface StoreState {
  people: PeopleState;
  film: FilmState;
}
