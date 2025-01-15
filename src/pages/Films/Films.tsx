import { Container } from "@mui/material";
import Footer from "../../components/Footer";
import { useState } from "react";
import { Table } from "../../components/Table/Table";
import { FILMS_COLUMNS } from "../../constants/table";

interface Film {
  name: string;
  year: string;
}

const data: Film[] = [{ name: "Menace Fantôme", year: "1980" }];

const Films = () => {
  const [entriesPerPageCount, setEntriesPerPageCount] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = 10;

  return (
    <>
      <Container
        maxWidth="xl"
        component="main"
        disableGutters
        sx={{ my: 5, px: 4 }}
      >
        <Table<Film>
          title="Characters List"
          data={data}
          columns={FILMS_COLUMNS}
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

export default Films;
