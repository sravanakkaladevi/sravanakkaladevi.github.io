import Navbar from "../../Components/Navbar/Navbar";
import MainContainer from "../../Components/MainContainer/MainContainer";
import ComponentTitle from "../../Components/ComponentTitle/ComponentTitle";
import styles from "./Contact.module.css";

import EmailComponent from "../../Components/EmailComponent/EmailComponent";
import Circle from "../../Components/Circle/Circle";

function Contact() {
  return (
    <div>
      <Navbar />
      <Circle top={"-5rem"} right={"-18rem"} />
      <MainContainer>
        <ComponentTitle title={"Get in touch"} />
        <div className={styles.box}>
          {/* === LEFT SIDE === */}
          <div className={styles.left_section_indexing}>
            {/* Email Component */}
            <EmailComponent />
          </div>

          {/* === RIGHT SIDE === */}
          <div className={styles.right_section_indexing}>
            {/* Location */}
            <div className={styles.location_services}>
              <div className={styles.symbol}>
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <p>Turkayamjal, Telangana, India - 501510</p>
            </div>

            {/* Phone */}
            <div className={styles.location_services}>
              <div className={styles.symbol}>
                <i className="fa-solid fa-phone"></i>
              </div>
              <p>+91 8309484956</p>
            </div>

            {/* Email */}
            <div className={styles.location_services}>
              <div className={styles.symbol}>
                <i className="fa-solid fa-envelope"></i>
              </div>
              <p>akkaladevisravankumar@gmail.com</p>
            </div>

            {/* Social Links */}
            <div className={styles.follow_me_section}>
              <p>Follow me on</p>
              <div className={styles.account_box}>
                <div className={styles.account_icon}>
                  <a
                    href="https://www.linkedin.com/in/sravanakkaladevi/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                </div>
                <div className={styles.account_icon}>
                  <a
                    href="https://github.com/sravanakkaladevi"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-github"></i>
                  </a>
                </div>
                <div className={styles.account_icon}>
                  <a
                    href="https://www.instagram.com/_sravansravan824_?igsh=aWp5d2Z2ZXJ1M2Zi"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MainContainer>
    </div>
  );
}

export default Contact;
