import { createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";

import MainPage from "../../pages/MainPage";
import TimelinePage from "../../pages/TimelinePage";
import BankCardPage from "../../pages/BankCardPage";
import { ThemeContext } from "../../utils/ThemeProvider";
import { useContext, useEffect } from "react";
import { getCurrencyData } from "../../api/currencyapi.api";

const router = createBrowserRouter([{ path: "*", Component: Root }]);

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
  // const [first, setfirst] = useState(second)

  useEffect(() => {
    console.log("theme changed");
    document.documentElement.setAttribute("data-theme", theme ? "dark" : "light");
  }, [theme]);

  useEffect(() => {
    getCurrencyData();
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
