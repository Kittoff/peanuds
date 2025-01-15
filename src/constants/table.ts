import { Filter, MenuItemValue } from "../types";

export const MENU_ITEM_VALUE: MenuItemValue[] = [10, 20, 30];

export const GENDER_OPTIONS: Filter["options"] = [
  { label: "None", value: "" },
  { label: "Male", value: "male" },
  { label: "Female", value: "female" },
  { label: "N/A", value: "n/a" },
];

export const PEOPLE_COLUMNS = [
  { key: "name", label: "Name" },
  { key: "gender", label: "Gender" },
  { key: "height", label: "Height" },
];
export const FILMS_COLUMNS = [
  { key: "name", label: "Name" },
  { key: "year", label: "Year" },
];
