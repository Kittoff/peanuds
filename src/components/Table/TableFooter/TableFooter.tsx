import {
  Stack,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Pagination,
} from "@mui/material";
import { PaginationConfig } from "../../../types";

interface TableFooterProps {
  pagination: PaginationConfig;
}

export const TableFooter = ({ pagination }: TableFooterProps) => {
  return (
    <Stack direction="row" alignItems="center" py={2}>
      <Stack direction="row" justifyContent="center" flex={1}>
        <Pagination
          count={pagination.totalPages}
          page={pagination.currentPage}
          onChange={(_, page) => pagination.onPageChange(page)}
          variant="text"
          shape="rounded"
        />
      </Stack>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="entries-select-label">Show Entries</InputLabel>
        <Select
          labelId="entries-select-label"
          id="entries-select"
          value={String(pagination.entriesPerPage)}
          label="Show Entries"
          onChange={(e) =>
            pagination.onEntriesPerPageChange(Number(e.target.value))
          }
          variant="outlined"
        >
          {(pagination.entriesOptions || [10, 25, 50, 100]).map((value) => (
            <MenuItem key={value} value={value}>
              {value}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Stack>
  );
};
