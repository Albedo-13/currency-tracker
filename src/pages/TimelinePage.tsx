import Header from "../components/Header/Header";
import Welcome from "../components/Welcome/Welcome";
import UpdateStatus from "../components/UpdateStatus/UpdateStatus";
import CandlestickChart from "../components/CandlestickChart/CandlestickChart";
import Footer from "../components/Footer/Footer";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";

export default function TimelinePage() {
  return (
    <>
      <ErrorBoundary>
        <Header />
        <Welcome />
        <UpdateStatus />
        <CandlestickChart />
        <Footer />
      </ErrorBoundary>
    </>
  );
}
