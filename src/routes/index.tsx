import { Routes, Route } from "react-router-dom";
import { NAV_ITEMS } from "../constants/navigation";

export const AppRoutes = () => (
  <Routes>
    {NAV_ITEMS.map(({ path, Component }) => (
      <Route key={path} path={path} element={<Component />} />
    ))}
  </Routes>
);
