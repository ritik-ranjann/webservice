import React, { useState } from "react";
import ChatWindow from "./Chat/ChatWindow"; // fixed path ✅
function ContactUs() {
  const [openChat, setOpenChat] = useState(false);

  return (
    <div>
      <section className="contact" id="contact">
        <div className="content">
          <div className="title"><span>Connect Me</span></div>
          <div className="text">
            <div className="topic">Have Any Project?</div>
            <h3>Ritik Ranjan</h3>
            <h5>Email: ritik19eee@gmail.com</h5>
            <h5>Mobile no. 7301587412</h5>
            <div className="button">
              <button onClick={() => setOpenChat(true)}>Let's Chat</button>
            </div>
          </div>
        </div>
      </section>

      {openChat && <ChatWindow onClose={() => setOpenChat(false)} />}
    </div>
  );
}

export default ContactUs;
