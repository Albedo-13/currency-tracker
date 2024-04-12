import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Welcome from "../Welcome/Welcome";
import Footer from "../Footer/Footer";
import UpdateStatus from "../UpdateStatus/UpdateStatus";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import MainPage from "../../pages/MainPage";
import TimelinePage from "../../pages/TimelinePage";
import BankCardPage from "../../pages/BankCardPage";
import ContactPage from "../../pages/ContactPage";

export const BrowserRoutes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/timeline",
        element: <TimelinePage />,
      },
      {
        path: "/bank-card",
        element: <BankCardPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
    ],
  },
];

export function Layout() {
  return (
    <ErrorBoundary>
      <Header />
      <Welcome />
      <UpdateStatus />
      <Outlet />
      <Footer />
    </ErrorBoundary>
  );
}
