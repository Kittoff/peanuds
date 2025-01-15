import Films from "../pages/Films";
import Home from "../pages/Home";
import People from "../pages/People";
import { NavItem } from "../types";

export const NAV_ITEMS: NavItem[] = [
  { path: "/", label: "Home", Component: Home },
  { path: "/people", label: "People", Component: People },
  { path: "/films", label: "Films", Component: Films },
];
