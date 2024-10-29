import "./App.css";

import MUIProvider from "./app/muiProvider/MUIProvider";
import MainRouter from "./app/routers/MainRouters";

function App() {
  return (
    <MUIProvider>
      <MainRouter />
    </MUIProvider>
  );
}

export default App;
