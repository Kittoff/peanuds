import { useBoundStore } from "../store/boundedStore";

const BASE_URL = "https://swapi.tech/api";

export const fetchPeople = async () => {
  const { page, limit } = useBoundStore.getState().people;

  const response = await fetch(
    `${BASE_URL}/people?page=${page}&limit=${limit}`
  );
  if (!response.ok) {
    throw new Error("Échec de la récupération des données");
  }

  const data = await response.json();
  return data.results;
};
