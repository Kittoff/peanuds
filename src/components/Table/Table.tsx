import { Column, Filter, PaginationConfig } from "../../types";
import { TableContent } from "./TableBody/TableBody";
import { TableFooter } from "./TableFooter/TableFooter";
import { TableHeader } from "./TableHeader/TableHeader";

interface TableProps<T> {
  title: string;
  data: T[];
  columns: Column<T>[];
  filters?: Filter[];
  pagination?: PaginationConfig;
}

export function Table<T>({
  title,
  data,
  columns,
  filters,
  pagination,
}: TableProps<T>) {
  return (
    <div>
      <TableHeader title={title} filters={filters} />
      <TableContent data={data} columns={columns} />
      {pagination && <TableFooter pagination={pagination} />}
    </div>
  );
}
