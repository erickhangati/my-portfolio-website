import React, { useState, useEffect } from "react";
import { client } from "../../client";
import { motion } from "framer-motion";

import Heading from "../UI/Heading/Heading";
import Button from "../UI/Button/Button";
import LoadingSpinner from "../UI/LoadingSpinner/LoadingSpinner";
import ContactForm from "./ContactForm/ContactForm";

import styles from "./Contact.module.scss";

const date = new Date();
const year = date.getFullYear();

const Contact = () => {
  const [contact, setContact] = useState([]);

  useEffect(() => {
    const query = "*[_type == 'contact']";
    client.fetch(query).then((data) => setContact(data));
  }, []);

  const [contactDetails] = contact;
  if (!contactDetails) return <LoadingSpinner />;

  return (
    <section className={styles.contact} id="contact">
      <Heading
        number="04"
        heading={contactDetails.heading}
        className={styles["contact__heading"]}
      />

      {/* INTRODUCTION */}
      <div className={styles["contact__intro"]}>
        <div className={styles["contact__description"]}>
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {contactDetails.subHeading}
          </motion.h3>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className={styles["contact__description-text"]}
          >
            {contactDetails.description.map((text, index) => (
              <p key={text + index}>{text}</p>
            ))}
          </motion.div>
        </div>

        <motion.a
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          href="mailto:ekhangati@gmail.com"
          rel="noreferrer noopener"
        >
          <Button>Contact Me</Button>
        </motion.a>
      </div>

      {/* CONTACT FORM */}
      <ContactForm />

      {/* COPYRIGHT */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className={styles["contact__copyright"]}
      >
        <span>Copyright&copy; {year}. All rights reserved.</span>
      </motion.div>
    </section>
  );
};

export default Contact;
