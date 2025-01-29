import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { fetchPeople } from "../api/swapi";
import { useBoundStore } from "../store/boundedStore";

export const usePeople = () => {
  const { page, limit } = useBoundStore((state) => state.people);

  return useQuery({
    queryKey: ["people", page, limit],
    queryFn: fetchPeople,
    placeholderData: keepPreviousData,
  });
};
