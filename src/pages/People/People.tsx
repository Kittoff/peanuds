// components/People.tsx
import { Container } from "@mui/material";
import Footer from "../../components/Footer";
import { useEffect } from "react";
import { Table } from "../../components/Table/Table";
import { GENDER_OPTIONS, PEOPLE_COLUMNS } from "../../constants/table";
import { usePeople } from "../../hooks/usePeople";
import { useBoundStore } from "../../store/boundedStore";
import { PeopleTable } from "./types";

const People = () => {
  const { data, isLoading, isError } = usePeople();
  const {
    filters,
    setFilters,
    currentPage,
    setCurrentPage,
    entriesPerPage,
    setEntriesPerPage,
  } = useBoundStore((state) => state.people);

  const totalPages = 10;

  useEffect(() => {
    if (data) {
      console.log("data : ", data);
    }
  }, [data]);

  const filtersOption = [
    {
      label: "Gender",
      value: filters.gender || "",
      options: GENDER_OPTIONS,
      onChange: (value: string) =>
        setFilters({
          ...filters,
          gender: value as "" | "male" | "female" | "N/A",
        }),
    },
  ];

  if (isLoading) return <div>Chargement...</div>;
  if (isError) return <div>Erreur lors du chargement des données</div>;

  return (
    <>
      <Container
        maxWidth="xl"
        component="main"
        disableGutters
        sx={{ my: 5, px: 4 }}
      >
        <Table<PeopleTable>
          title="Characters List"
          data={[]}
          columns={PEOPLE_COLUMNS}
          filters={filtersOption}
          pagination={{
            currentPage,
            totalPages,
            entriesPerPage,
            onPageChange: setCurrentPage,
            onEntriesPerPageChange: setEntriesPerPage,
          }}
        />
      </Container>
      <Footer />
    </>
  );
};

export default People;
