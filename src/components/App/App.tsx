import Header from "../Header/Header";
import Welcome from "../Welcome/Welcome";
import UpdateStatus from "../UpdateStatus/UpdateStatus";
import CurrencyList from "../CurrencyList/CurrencyList";

function App() {

  return (
    <>
      <Header />
      <Welcome />
      <UpdateStatus />
      <CurrencyList />

      <div style={{height: "250px", backgroundColor: "gray"}}></div>
    </>
  );
}

export default App;
