import "./App.css";
import Header from "./components/Header/Header.tsx";
import { AppRoutes } from "./routes/index.tsx";

const App = () => {
  return (
    <>
      <Header />
      <AppRoutes />
    </>
  );
};

export default App;
