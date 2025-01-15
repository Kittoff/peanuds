import {
  Table as MuiTable,
  TableContainer,
  TableBody as MuiTableBody,
  TableRow,
  TableCell,
  Typography,
  TableHead,
} from "@mui/material";
import { Column } from "../../../types";

interface TableContentProps<T> {
  data: T[];
  columns: Column<T>[];
}

export function TableContent<T>({ data, columns }: TableContentProps<T>) {
  return (
    <TableContainer>
      <MuiTable>
        <TableHead>
          <TableRow>
            {columns.map((column, colIndex) => (
              <TableCell key={colIndex}>
                {column.label || String(column.key)}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <MuiTableBody>
          {data.length > 0 ? (
            data.map((item, index) => (
              <TableRow key={index}>
                {columns.map((column, colIndex) => (
                  <TableCell key={colIndex}>
                    {column.render
                      ? column.render(item)
                      : String(item[column.key as keyof T] || "N/A")}
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
