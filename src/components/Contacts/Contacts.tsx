import "./contacts.scss";

import { Component } from "react";

export default class Contacts extends Component {
  render() {
    return (
      <section className="contacts">
        <div className="container">
          <h2 className="contacts__title gradient-text">Contacts</h2>
          <address className="contacts-wrapper">
            <div className="contacts-wrapper-item">
              <p className="contacts__subtitle">Phone number</p>
              <a className="contacts__info" href={`tel:${import.meta.env.VITE_CONTACT_PHONE}`}>
                {import.meta.env.VITE_CONTACT_PHONE}
              </a>
            </div>
            <div className="contacts-wrapper-item">
              <p className="contacts__subtitle">Address</p>
              <p className="contacts__info">{import.meta.env.VITE_CONTACT_ADDRESS}</p>
            </div>

            <div className="contacts-wrapper-item">
              <p className="contacts__subtitle">EMail</p>
              <a className="contacts__info" href={`mailto:${import.meta.env.VITE_CONTACT_EMAIL}`}>
                {import.meta.env.VITE_CONTACT_EMAIL}
              </a>
            </div>
          </address>
        </div>
      </section>
    );
  }
}
