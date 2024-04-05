import Header from "../components/Header/Header";
import Welcome from "../components/Welcome/Welcome";
import UpdateStatus from "../components/UpdateStatus/UpdateStatus";
import Footer from "../components/Footer/Footer";
import Contacts from "../components/Contacts/Contacts";
import ErrorBoundary from "../utils/ErrorBoundary";

export default function MainPage() {
  return (
    <>
      <ErrorBoundary>
        <Header />
        <Welcome />
        <UpdateStatus />
        <Contacts />
        <Footer />
      </ErrorBoundary>
    </>
  );
}
