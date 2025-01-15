import { ReactNode } from "react";

export type NavItem = {
  path: string;
  label: string;
  Component: React.ElementType;
};

export type MenuItemValue = 10 | 20 | 30;

export interface Column<T> {
  key: keyof T | string;
  label: string;
  render?: (item: T) => ReactNode;
}

export interface Filter {
  label: string;
  value: string;
  options: Array<{ label: string; value: string }>;
  onChange: (value: string) => void;
}

export interface PaginationConfig {
  currentPage: number;
  totalPages: number;
  entriesPerPage: number;
  entriesOptions?: number[];
  onPageChange: (page: number) => void;
  onEntriesPerPageChange: (entries: number) => void;
}
