import {
  Table as MuiTable,
  TableContainer,
  TableBody as MuiTableBody,
  TableRow,
  TableCell,
  Typography,
  TableHead,
  Link,
  Stack,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { Column } from "../../../types";

interface TableContentProps<T> {
  data: T[];
  columns: Column<T>[];
  getLink: (item: T) => string;
}

export function TableContent<T>({
  data,
  columns,
  getLink,
}: TableContentProps<T>) {
  return (
    <TableContainer>
      <MuiTable>
        <TableHead>
          <TableRow>
            {columns.map((column, colIndex) => (
              <TableCell key={colIndex} variant="head">
                <Typography variant="h5">
                  {column.label || String(column.key)}
                </Typography>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <MuiTableBody>
          {data.length > 0 ? (
            data?.map((item, index) => (
              <TableRow key={index}>
                {columns.map((column, colIndex) => (
                  <TableCell key={colIndex}>
                    {column.render ? (
                      column.render(item)
                    ) : (
                      <Stack spacing={1} my={2}>
                        <Link component={RouterLink} to={getLink(item)}>
                          {String(item[column.key as keyof T] || "N/A")}
                        </Link>
                      </Stack>
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length}>
                <Typography
                  variant="body2"
                  align="center"
                  sx={{ py: 2, color: "text.secondary" }}
                >
                  No items
                </Typography>
              </TableCell>
            </TableRow>
          )}
        </MuiTableBody>
      </MuiTable>
    </TableContainer>
  );
}
