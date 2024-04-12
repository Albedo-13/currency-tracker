import { Outlet } from "react-router-dom";
import BankCardPage from "../../pages/BankCardPage";
import ContactPage from "../../pages/ContactPage";
import MainPage from "../../pages/MainPage";
import TimelinePage from "../../pages/TimelinePage";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import UpdateStatus from "../UpdateStatus/UpdateStatus";
import Welcome from "../Welcome/Welcome";

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
