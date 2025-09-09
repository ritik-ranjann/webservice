import React, { useState } from "react";
import ContactForm from "./ContactForm";

function Home() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      {/* Home Section Start */}
      <section className="home" id="home">
        <div className="home-content">
          <div className="text">
            <div className="text-one" style={{ color: "white" }}>Hello,</div>
            <div className="text-two" style={{ color: "white" }}>I'm Ritik Ranjan</div>
            <div className="text-three">Java Full Stack Developer</div>
            <div className="text-four" style={{ color: "white" }}>From India</div>
          </div>
          <div className="button">
            <button onClick={() => setShowForm(true)}>Hire Me</button>
          </div>
        </div>
      </section>

      {/* Contact Form Modal */}
      {showForm && <ContactForm closeForm={() => setShowForm(false)} />}
    </div>
  );
}

export default Home;
