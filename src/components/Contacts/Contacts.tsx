import { Component } from "react";
import "./contacts.scss";

export default class Contacts extends Component {
  render() {
    return (
      <section className="contacts">
        <div className="container">
          <h2 className="contacts-title gradient-text">Contacts</h2>
          <address className="contacts-wrapper">
            <div className="contacts-wrapper-item">
              <p className="contacts-subtitle">Phone number</p>
              <a className="contacts-info" href="tel:80172047194">
                8 017 204-71-94
              </a>
            </div>
            <div className="contacts-wrapper-item">
              <p className="contacts-subtitle">Address</p>
              <p className="contacts-info">10 Olshevsky Street, Minsk, Minsk region 220073</p>
            </div>

            <div className="contacts-wrapper-item">
              <p className="contacts-subtitle">EMail</p>
              <a className="contacts-info" href="mailto:prokopenya.work@gmail.com">
                prokopenya.work@gmail.com
              </a>
            </div>
          </address>
        </div>
      </section>
    );
  }
}
