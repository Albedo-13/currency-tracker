import Header from "../components/Header/Header";
import Welcome from "../components/Welcome/Welcome";
import UpdateStatus from "../components/UpdateStatus/UpdateStatus";
import Footer from "../components/Footer/Footer";
import Contacts from "../components/Contacts/Contacts";

export default function MainPage() {
  return (
    <>
      <Header />
      <Welcome />
      <UpdateStatus />
      <Contacts />
      <Footer />
    </>
  );
}
