import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import Header from "./components/Header/Header.tsx";
import { AppRoutes } from "./routes/index.tsx";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <AppRoutes />
    </QueryClientProvider>
  );
};

export default App;
