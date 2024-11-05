import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";

import MUIProvider from "./app/muiProvider/MUIProvider";
import { MainRouter } from "./app/routers/MainRouters";

export const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MUIProvider>
        <MainRouter />
      </MUIProvider>
    </QueryClientProvider>
  );
}

export default App;
