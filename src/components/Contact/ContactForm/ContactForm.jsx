import React, { useState } from "react";
import { RiErrorWarningLine, RiMailCheckLine } from "react-icons/ri";
import { client } from "../../../client";
import { motion } from "framer-motion";

import Button from "../../UI/Button/Button";
import styles from "./ContactForm.module.scss";

const ContactForm = () => {
  // FORM SUBMISSION STATES
  const [isLoading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // INITIAL STATES
  const initialStates = {
    name: "",
    email: "",
    message: "",
  };

  // INPUT STATES
  const [input, setInput] = useState(initialStates);

  // ERROR STATES
  const [inputError, setInputError] = useState(initialStates);

  // ERROR COMPONENT
  const Error = ({ error }) => {
    return (
      <div className={styles["contact__form-error"]}>
        <span>{error}</span>
        <RiErrorWarningLine />
      </div>
    );
  };

  // SET INPUTS
  const setInputValues = (e, property) => {
    // REMOVE ERROR IF ANY
    setInputError((previous) => {
      return {
        ...previous,
        [property]: "",
      };
    });

    // SET VALUE
    setInput((previous) => {
      return {
        ...previous,
        [property]: e.target.value,
      };
    });
  };

  // NAME CHANGE HANDLER
  const nameChangeHandler = (e) => {
    setInputValues(e, "name");
  };

  // EMAIL CHANGE HANDLER
  const emailChangeHandler = (e) => {
    setInputValues(e, "email");
  };

  // MESSAGE CHANGE HANDLER
  const messageChangeHandler = (e) => {
    setInputValues(e, "message");
  };

  // INPUT VALIDATIONS
  const inputValidations = (property, value) => {
    const emailIsValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
      value
    );

    if (input[property].length === 0) {
      setInputError((previous) => {
        return {
          ...previous,
          [property]: "Can't be empty!",
        };
      });

      return false;
    }

    if (property === "email" && !emailIsValid) {
      setInputError((previous) => {
        return {
          ...previous,
          [property]: "Invalid email!",
        };
      });

      return false;
    }

    return true;
  };

  // FORM SUBMIIT HANDLER
  const handleFormSubmit = (e) => {
    e.preventDefault();

    const nameIsValid = inputValidations("name");
    const emailIsValid = inputValidations("email", input.email);
    const messageIsValid = inputValidations("message");

    if (!nameIsValid || !emailIsValid || !messageIsValid) return;

    // SET LOADING STATE
    setLoading(true);

    // COLLECTING THE SUBMITTED DATA
    const messageData = {
      _type: "messages",
      name: input.name,
      email: input.email,
      message: input.message,
    };

    // SUBMITTING DATA TO SANITY BACKEND
    client.create(messageData).then(() => {
      setInput(initialStates);
      setLoading(false);
      setSubmitted(true);
    });
  };

  return (
    <motion.form
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className={styles["contact__form"]}
      onSubmit={handleFormSubmit}
    >
      <div className={styles["contact__form-control"]}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={input.name}
          onChange={nameChangeHandler}
        />
        {inputError.name && <Error error={inputError.name} />}
      </div>

      <div className={styles["contact__form-control"]}>
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={input.email}
          onChange={emailChangeHandler}
        />
        {inputError.email && <Error error={inputError.email} />}
      </div>

      <div className={styles["contact__form-control"]}>
        <textarea
          name="message"
          rows="4"
          placeholder="Message"
          value={input.message}
          onChange={messageChangeHandler}
        />
        {inputError.message && <Error error={inputError.message} />}
      </div>

      <Button type="submit" className={isLoading ? styles.sending : ""}>
        {isLoading ? "Sending..." : "Send"}
      </Button>

      {submitted && (
        <div className={styles["contact__form-submitted"]}>
          <RiMailCheckLine />
          <span>Message Submitted!</span>
        </div>
      )}
    </motion.form>
  );
};

export default ContactForm;
