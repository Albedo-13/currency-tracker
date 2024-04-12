import Header from "../components/Header/Header";
import Welcome from "../components/Welcome/Welcome";
import UpdateStatus from "../components/UpdateStatus/UpdateStatus";
import MapSearch from "../components/MapSearch/MapSearch";
import Footer from "../components/Footer/Footer";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";

export default function BankCardPage() {

  return (
    <>
      <ErrorBoundary>
        <Header />
        <Welcome />
        <UpdateStatus />
        <MapSearch />
        <Footer />
      </ErrorBoundary>
    </>
  );
}
