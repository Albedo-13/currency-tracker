import Header from "../components/Header/Header";
import Welcome from "../components/Welcome/Welcome";
import UpdateStatus from "../components/UpdateStatus/UpdateStatus";
import CurrencyList from "../components/CurrencyList/CurrencyList";
import Footer from "../components/Footer/Footer";
import ErrorBoundary from "../utils/ErrorBoundary";

export default function MainPage() {
  return (
    <>
      <ErrorBoundary>
        <Header />
        <Welcome />
        <UpdateStatus />
        <CurrencyList />
        <Footer />
      </ErrorBoundary>
    </>
  );
}
