import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="form">
      <div className="form_grid">
        <h3>CONTACT</h3>
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
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
