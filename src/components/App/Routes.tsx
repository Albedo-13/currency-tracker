import { Route, Routes } from "react-router-dom";
import MainPage from "../../pages/MainPage";
import TimelinePage from "../../pages/TimelinePage";
import BankCardPage from "../../pages/BankCardPage";
import ContactPage from "../../pages/ContactPage";

export function Root() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/timeline" element={<TimelinePage />} />
      <Route path="/bank-card" element={<BankCardPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}