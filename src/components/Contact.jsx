import React, { useEffect } from "react";
import "./Contact.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const [message, setMessage] = React.useState("");

  const handleSubmit = (event) => {
    console.log(`
    Name: ${name}
      Email: ${email}
      Message: ${message}
    `);
    event.preventDefault();
  };
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div id="contact" className="sections active">
      <div id="contact-div">
        <div id="form-section" data-aos="fade-up">
          <div id="form-contact">
            <form onSubmit={handleSubmit}>
              <label>
                Name
                <input
                  name="name"
                  type="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </label>
              <label>
                Email
                <input
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </label>
              <label>
                Message
                <input
                  id="message-input"
                  name="message"
                  type="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </label>

              <button>Submit</button>
            </form>
          </div>
          <div id="resume-contact">
              <a src="https://drive.google.com/file/d/1zaoSgEE1EqvWHXN6sA44-LQOqzZ0aUpP/view?usp=sharing">Resume</a>
            
          </div>
        </div>
        <p className="topic-headings" data-aos="fade-up">
          CONTACT
        </p>
      </div>
    </div>
  );
};

export default Contact;
