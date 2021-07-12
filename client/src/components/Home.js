// importing components and react
import React from "react";
import { useState } from "react";
import ContactForm from "./ContactForm";
// home page function
const Home = (props) => {
  // useState hook for form modal
  const [modalFormOpen, setModalFormOpen] = useState(false);
  // handles if the form is open or not
  const handleFormDisplay = () => {
    // if modalFormOpen is false
    if (!modalFormOpen) {
      // set it to true
      setModalFormOpen(true);
    }
  };

  return (
    <div id="home">
      <div className="home-page">
        <div className="home-head">
          <h3>Ian French</h3>
        </div>
        <div>
          <img
            className="home-img"
            src="../images/PortfolioPic.jpeg"
            alt="Ian French Portrait"
          />
          <p className="home-text">
            A passionate web developer looking to make a difference in Vermont.
          </p>
        </div>
        <div className="contact">
          {/* if the modalFormOpen is false, display a button that, when clicked, runs handleFormDisplay to set modalFormOpen to true */}
          {!modalFormOpen ? (
            <button className="contact-button" onClick={handleFormDisplay}>
              Contact Me
            </button>
            // else display nothing
          ) : null}
          {/* if modalFormOpen is true display the contactform component and pass setmodalformopen as prop*/}
          {modalFormOpen ? (
            <ContactForm
              className="modal-form"
              setModalFormOpen={setModalFormOpen}
            />
            // else display nothing
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Home;
