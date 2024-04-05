import Header from "../components/Header/Header";
import Welcome from "../components/Welcome/Welcome";
import UpdateStatus from "../components/UpdateStatus/UpdateStatus";
import Graph from "../components/Graph/Graph";
import GraphFilters from "../components/Graph/GraphFilters/GraphFilters";
import Footer from "../components/Footer/Footer";
import ErrorBoundary from "../utils/ErrorBoundary";

export default function TimelinePage() {
  return (
    <>
      <ErrorBoundary>
        <Header />
        <Welcome />
        <UpdateStatus />
        <GraphFilters />
        <Graph />
        <Footer />
      </ErrorBoundary>
    </>
  );
}
