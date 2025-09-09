import React, { useState } from "react";
import emailjs from "emailjs-com";

function ContactForm({ closeForm }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_o3c5mna",   // ✅ Your Service ID
        "template_i4dcn98",  // ✅ Your Template ID
        formData,
        "Y1ejZ8ezkqSmDFxbt"  // ✅ Your Public Key
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
          closeForm();
        },
        (error) => {
          console.error("❌ EmailJS Error:", error);
          alert("❌ Failed to send message. Please check EmailJS settings.");
        }
      );
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Contact Me</h2>
        <form onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <div className="form-buttons">
  <button type="submit" className="btn send-btn">Send</button>
  <button type="button" className="btn close-btn" onClick={closeForm}>
    Close
  </button>
</div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
