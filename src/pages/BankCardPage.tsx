import Header from "../components/Header/Header";
import Welcome from "../components/Welcome/Welcome";
import UpdateStatus from "../components/UpdateStatus/UpdateStatus";
import BankMap from "../components/BankMap/BankMap";
import BankSearch from "../components/BankSearch/BankSearch";
import Footer from "../components/Footer/Footer";

export default function BankCardPage() {
  return (
    <>
      <Header />
      <Welcome />
      <UpdateStatus />
      <BankSearch />
      <BankMap />
      <Footer />
    </>
  );
}
