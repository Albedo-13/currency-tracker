import "./welcome.scss";

import logo from "/logo.svg";

export default function Welcome() {
  return (
    <section className="welcome">
      <div className="welcome-spray"></div>
      <div className="container">
        <div className="welcome-wrapper">
          <div className="welcome-wrapper__left">
            <h1 className="welcome__title gradient-text">Modsen Currency Tracker</h1>
            <p className="welcome__text">Quotes for the dollar and other international currencies.</p>
          </div>
          <div className="welcome__img">
            <img src={logo} alt="welcome currency tracker logo" />
          </div>
        </div>
      </div>
    </section>
  );
}
