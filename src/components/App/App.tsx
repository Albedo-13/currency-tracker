import { createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";

import MainPage from "../../pages/MainPage";
import TimelinePage from "../../pages/TimelinePage";
import BankCardPage from "../../pages/BankCardPage";
import { ThemeContext } from "../../utils/ThemeProvider";
import { useContext, useEffect } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { staleTime } from "../../constants/constants";

const router = createBrowserRouter([{ path: "*", Component: Root }]);
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: false,
      staleTime: staleTime,
    },
  },
});

function Root() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/timeline" element={<TimelinePage />} />
      <Route path="/bank-card" element={<BankCardPage />} />
    </Routes>
  );
}

function App() {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme ? "dark" : "light");
    localStorage.setItem("currency-tracker-theme", theme ? "dark" : "light");
  }, [theme]);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />;
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
}

export default App;
