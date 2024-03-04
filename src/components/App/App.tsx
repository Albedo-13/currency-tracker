import { createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";

import Header from "../Header/Header";
import Welcome from "../Welcome/Welcome";
import UpdateStatus from "../UpdateStatus/UpdateStatus";
import Footer from "../Footer/Footer";

import MainPage from "../../pages/MainPage";
import TimelinePage from "../../pages/TimelinePage";
import BankCardPage from "../../pages/BankCardPage";

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
  return (
    <>
      <Header />
      <Welcome />
      <UpdateStatus />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;
