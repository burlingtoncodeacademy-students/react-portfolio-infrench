import React from "react";
const ContactForm = (props) => {
  // closes form modal when called
  const closeModal = () => {
    props.setModalFormOpen(false);
  };
  return (
    <div>
      <div className="close-contact">
        {/* button to close form modal using closeModal */}
        <button onClick={closeModal} className="close-contact-button">X</button>
      </div>
      <div className="form-modal">
        <form className="contact-form">
          <input type="text" placeholder="Name" className="name" />
          <input type="text" placeholder="Email" className="email" />
          <input type="text" placeholder="Subject" className="subject" />
          <input type="text" placeholder="Message" className="message" />
          <input type="submit" className="submit" />
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
