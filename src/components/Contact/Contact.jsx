import "./contact.css";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_lxytvzl";
    const templateId = "template_1gizls4";
    const publicKey = "DHbnHWGnMOasvVkdu";

    const templateParams = {
      from_name: name,
      from_email: email,
      subject: subject,
      to_name: "Abishek.S",
      message: message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully!", response);

        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  return (
    <section className="contact-section">

      <h2 className="contact-title">
        Let's <span>Connect</span>
      </h2>

      <p className="contact-subtitle">
        Have a project in mind? I'd love to hear from you. Send me a message
        and let's create something amazing together.
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>

        <div className="row">
          <div className="input-group">
            <label>Name</label>
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="your.email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className="input-group">
          <label>Subject</label>
          <input
            type="text"
            placeholder="What's this about?"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>Message</label>
          <textarea
            placeholder="Tell me about your project..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>

        <button type="submit" className="send-btn">
          Send Message ➤
        </button>

      </form>

    </section>
  );
};

export default Contact;