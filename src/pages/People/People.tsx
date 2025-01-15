import { Container } from "@mui/material";
import Footer from "../../components/Footer";
import { useState } from "react";
import { Table } from "../../components/Table/Table";
import { GENDER_OPTIONS, PEOPLE_COLUMNS } from "../../constants/table";

interface Character {
  name: string;
  gender: string;
  height: number;
}

const People = () => {
  const [gender, setGender] = useState<string>("");
  const [entriesPerPageCount, setEntriesPerPageCount] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = 10;

  const data: Character[] = [
    { name: "Luke Skywalker", gender: "male", height: 172 },
  ];

  const filters = [
    {
      label: "Gender",
      value: gender,
      options: GENDER_OPTIONS,
      onChange: setGender,
    },
  ];

  return (
    <>
      <Container
        maxWidth="xl"
        component="main"
        disableGutters
        sx={{ my: 5, px: 4 }}
      >
        <Table<Character>
          title="Characters List"
          data={data}
          columns={PEOPLE_COLUMNS}
          filters={filters}
          pagination={{
            currentPage,
            totalPages,
            entriesPerPage: entriesPerPageCount,
            onPageChange: setCurrentPage,
            onEntriesPerPageChange: setEntriesPerPageCount,
          }}
        />
      </Container>
      <Footer />
    </>
  );
};

export default People;
