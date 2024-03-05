import Header from "../components/Header/Header";
import Welcome from "../components/Welcome/Welcome";
import UpdateStatus from "../components/UpdateStatus/UpdateStatus";
import Graph from "../components/Graph/Graph";
import GraphFilters from "../components/Graph/GraphFilters/GraphFilters";
import Footer from "../components/Footer/Footer";

export default function TimelinePage() {
  return (
    <>
      <Header />
      <Welcome />
      <UpdateStatus />
      <GraphFilters />
      <Graph />
      <Footer />
    </>
  );
}
