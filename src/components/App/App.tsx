import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ThemeContext } from "../../utils/ThemeProvider";
import { useContext, useEffect } from "react";

import { QueryClient } from "@tanstack/react-query";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";
import { staleTime } from "../../constants/constants";
import { Root } from "./Routes";

const router = createBrowserRouter([{ path: "*", Component: Root }]);
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: false,
      staleTime: staleTime,
      gcTime: staleTime,
    },
  },
});

const persister = createSyncStoragePersister({
  storage: window.localStorage,
});

function App() {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme ? "dark" : "light");
    localStorage.setItem("currency-tracker-theme", theme ? "dark" : "light");
  }, [theme]);

  return (
    <>
      <PersistQueryClientProvider client={queryClient} persistOptions={{ persister }}>
        <RouterProvider router={router} />
        <ReactQueryDevtools />
      </PersistQueryClientProvider>
    </>
  );
}

export default App;
