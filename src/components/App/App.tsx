import { createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";

import Header from "../Header/Header";
import Welcome from "../Welcome/Welcome";
import UpdateStatus from "../UpdateStatus/UpdateStatus";
import Footer from "../Footer/Footer";

import MainPage from "../../pages/MainPage";
import TimelinePage from "../../pages/TimelinePage";
import BankCardPage from "../../pages/BankCardPage";
import ThemeProvider, { ThemeContext } from "../../utils/ThemeProvider";
import { useContext, useEffect } from "react";
import axios from "axios";

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
  console.log("theme changed");
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme ? "dark" : "light");
  }, [theme]);

  useEffect(() => {
    axios({
      method: "get",
      maxBodyLength: Infinity,
      // url: "https://api.currencyapi.com/v3/latest?apikey=cur_live_McVPn095O6nn3dK3OZmnrHf7puqxlPHC7YdDhrBY&currencies=EUR%2CUSD%2CCAD",
      headers: {
        // Accept: "text/plain",
        // "X-CoinAPI-Key": "695E3884-E0A1-4E9E-A3DF-2C41D2F1BA60",
      },
    })
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });

    // axios.get("https://pokeapi.co/api/v2/pokemon/pikachu/").then((res) => {
    //   console.log(res.data);
    // });
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
