import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";

import { createContext, useEffect, useState } from "react";
import MUIProvider from "./app/muiProvider/MUIProvider";
import { MainRouter } from "./app/routers/MainRouters";

export const queryClient = new QueryClient();
export const colorContext = createContext("light");
function App() {
  const [colorScheme, setColorScheme] = useState("");
  useEffect(() => {
    const updateColorScheme = () => {
      const scheme = document.documentElement.getAttribute(
        "data-toolpad-color-scheme",
      );
      setColorScheme(scheme);
    };

    // 초기에 한 번 실행
    updateColorScheme();

    // MutationObserver로 data 속성이 변경될 때 감지
    const observer = new MutationObserver(updateColorScheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-toolpad-color-scheme"],
    });

    return () => observer.disconnect(); // 컴포넌트 언마운트 시 정리
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <colorContext.Provider value={colorScheme}>
        <MUIProvider>
          <MainRouter />
        </MUIProvider>
      </colorContext.Provider>
    </QueryClientProvider>
  );
}

export default App;
