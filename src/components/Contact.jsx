import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import styles from "../style";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameTouched, setNameTouched] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);
  const [messageTouched, setMessageTouched] = useState(false);
  const maxNameChars = 50;
  const maxEmailChars = 75;
  const maxMessageWords = 200;
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_3q377ph', 'template_4m0l4ar', form.current, {
        publicKey: 'D0j4NrMUxqyc49G5T',
      })
      .then(
        () => {
          alert('Message sent successfully!');
          setName("");
          setEmail("");
          setMessage("");
          setNameTouched(false);
          setEmailTouched(false);
          setMessageTouched(false);
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };


  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const isNameValid = (!nameTouched || (name.trim().length > 0 && name.length <= maxNameChars));
  const isEmailValid = (!emailTouched || (email.trim().length > 0 && email.length <= maxEmailChars));
  const isMessageValid =
    message.trim().split(/\s+/).filter(Boolean).length <= maxMessageWords;

  const handleNameBlur = () => {
    setNameTouched(true);
  };

  const handleEmailBlur = () => {
    setEmailTouched(true);
  };

  const handleMessageBlur = () => {
    setMessageTouched(true);
  };

  return (
    <section
      className={`sm:px-4 px-2 sm:py-4 py-2 sm:flex-row flex-col bg-black-gradient-2 rounded-[14px] box-shadow`}
    >
      <div className="flex-1 flex flex-col rounded-lg text-white">
        <h2 className={styles.heading2}>
          Contact me
        </h2>
        <div className="">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-4"
          >
            <div className="flex-row sm:flex gap-4">
              <div className="flex-1">
                <label
                  htmlFor="name"
                  className={`block text-sm px-2 font-medium ${
                    nameTouched && !isNameValid
                      ? "text-red-500"
                      : "text-gray-300"
                  }`}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={handleNameChange}
                  onBlur={handleNameBlur}
                  required
                  placeholder="John Doe"
                  className={`mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border ${
                    nameTouched && !isNameValid
                      ? "border-red-500"
                      : "border-gray-700"
                  } rounded-md bg-gray-800 text-white`}
                />
              </div>
              <div className="flex-1">
                <label
                  htmlFor="email"
                  className={`block text-sm px-2 font-medium ${
                    emailTouched && !isEmailValid
                      ? "text-red-500"
                      : "text-gray-300"
                  }`}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={handleEmailChange}
                  onBlur={handleEmailBlur}
                  required
                  placeholder="example@example.com"
                  className={`mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border ${
                    emailTouched && !isEmailValid
                      ? "border-red-500"
                      : "border-gray-700"
                  } rounded-md bg-gray-800 text-white`}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm px-2 font-medium text-gray-300"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={handleMessageChange}
                onBlur={handleMessageBlur}
                required
                rows="2"
                maxLength="1000"
                className={`mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border ${
                  messageTouched && !isMessageValid
                    ? "border-red-500"
                    : "border-gray-700"
                } rounded-md bg-gray-800 text-white`}
              ></textarea>
              <p className="text-gray-400 text-xs text-right">
                {message.trim().split(/\s+/).filter(Boolean).length}/
                {maxMessageWords}
              </p>
            </div>
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
