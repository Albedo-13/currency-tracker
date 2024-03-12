import Header from "../components/Header/Header";
import Welcome from "../components/Welcome/Welcome";
import UpdateStatus from "../components/UpdateStatus/UpdateStatus";
import MapSearch from "../components/MapSearch/MapSearch";
import Footer from "../components/Footer/Footer";

export default function BankCardPage() {
  return (
    <>
      <Header />
      <Welcome />
      <UpdateStatus />
      <MapSearch />
      <Footer />
    </>
  );
}
