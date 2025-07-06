import React, { useState, useRef } from "react";
import styles from "./EmailComponent.module.css";
import emailjs from '@emailjs/browser';
import AlertBox from "../AlertBox/AlertBox";
import Loader from "../Loader/Loader";

function EmailComponent() {
  const [fname, setFname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [viewLoader, setViewLoader] = useState(false);
  const [viewAlert, setViewAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setViewLoader(true);

    const service_ID = "service_0jodoje";
    const template_ID = "template_0xxbrb1";
    const autoReplyTemplate_ID = "template_35hmgua";
    const public_key = "pV9eM-fI9W4wg98UD";

    const templateParams = {
      from_name: fname,
      from_email: email,
      to_name: "A. Sravan Kumar",
      message: message,
      title: "Portfolio Contact Form Submission"
    };

    // Send to you (owner)
    emailjs.send(service_ID, template_ID, templateParams, public_key)
      .then(() => {
        console.log("Message sent to owner");

        // Auto-reply to user
        emailjs.send(service_ID, autoReplyTemplate_ID, templateParams, public_key)
          .then(() => {
            console.log("Auto-reply sent to user");
          })
          .catch((err) => {
            console.error("Auto-reply error:", err);
          });

        setAlertMsg(`✅ Thank you ${fname}, your message has been sent successfully!`);
        setViewAlert(true);
        setFname("");
        setEmail("");
        setMessage("");
        setViewLoader(false);

        setTimeout(() => setViewAlert(false), 4000); // auto-hide alert
      })
      .catch((error) => {
        console.error("Email send error:", error);
        setAlertMsg("❌ Failed to send message. Please try again later.");
        setViewAlert(true);
        setViewLoader(false);

        setTimeout(() => setViewAlert(false), 4000);
      });
  };

  return (
    <div className={styles.email_component}>
      <div className={styles.header}>
        <h1 className={styles.header_title}>Send me a Message</h1>
      </div>

      <form className={styles.form} onSubmit={sendEmail}>
        <div className={styles.row}>
          <div className={styles.col}>
            <label htmlFor="name">Full Name</label>
            <input
              className={styles.input}
              type="text"
              placeholder="Full Name"
              name="from_name"
              value={fname}
              required
              onChange={(e) => setFname(e.target.value)}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.col}>
            <label htmlFor="email">Email Address</label>
            <input
              className={`${styles.input} ${styles.email_input}`}
              type="email"
              placeholder="Enter your email address"
              name="user_email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={`${styles.col} ${styles.message_input_section}`}>
            <label htmlFor="message">Enter your Message</label>
            <textarea
              className={styles.input}
              name="message"
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              cols="30"
              rows="10"
              required
              placeholder="This is my message for you"
            ></textarea>
          </div>
        </div>

        <button
          className={styles.submit_btn}
          type="submit"
          disabled={viewLoader}
        >
          <i className="fa-solid fa-paper-plane"></i>
        </button>
      </form>

      {viewLoader && <Loader />}
      {viewAlert && <AlertBox message={alertMsg} />}
    </div>
  );
}

export default EmailComponent;
