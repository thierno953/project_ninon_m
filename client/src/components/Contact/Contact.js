import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="form">
      <div className="form_grid">
        <div className="from_flex">
          <div className="from_info">
            <h2> Demande d'information</h2>
            <h3>
              Phone : <span>000000000000</span>
            </h3>
            <h3>
              Email : <span>hello@gmail.com</span>
            </h3>
            <h3>
              Adresse : <span>Rue Inconnue 00</span>
            </h3>
            <p>
              texte lisible et contenant du sens est source de distractions, et
              empêche de se concentrer sur la mise en page elle-même.
            </p>
          </div>
          <form>
            <input type="text" placeholder="Name" required />

            <input type="email" placeholder="Email" required />

            <textarea
              type="text"
              name="message"
              id=""
              rows="6"
              placeholder="Message"
            ></textarea>
            <button type="submit" className="btn_contact">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
