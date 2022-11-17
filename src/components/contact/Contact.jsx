import emailjs from "emailjs-com";
import "./contact.css";
import Phone from "../../images/phone.png";
import Email from "../../images/email.png";
import Address from "../../images/address.png";
import Github from "../../images/github.png";
import { useContext, useRef, useState } from "react";
import { ThemeContext } from "./../../context";
import toast, { Toaster } from "react-hot-toast";
import Fade from "react-reveal/Fade";

const Contact = () => {
  const [done, setDone] = useState(false);
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const formRef = useRef();
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_iy2ca3q",
        "template_qtno5f8",
        formRef.current,
        "user_ckBKuNBvhAt0cJY4Qf5Gq"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          setName("");
          setSubject("");
          setEmail("");
          setMessage("");
          toast.success("Email Sent!", {
            duration: 2000,
            position: "top-right",
            style: {
              background: "green",
              color: "white",
            },
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact" id="contact">
      <Fade bottom>
        <Toaster position="top-center" />
        <div className="c-bg"></div>
        <div className="c-wrapper">
          <div className="c-left">
            <h1 className="c-title">Let's discuss your project</h1>
            <div className="c-info">
              <div className="c-info-item">
                <img src={Phone} alt="Phone" className="c-icon" />
                +234 80 32 33 61 41
              </div>
              <div className="c-info-item">
                <img src={Email} alt="Email" className="c-icon" />
                francis.akindejoye@gmail.com
              </div>
              <div className="c-info-item">
                <img src={Github} alt="Github" className="c-icon" />
                <a
                  href="https://github.com/Akindejoye"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://github.com/Akindejoye
                </a>
              </div>
              <div className="c-info-item">
                <img src={Address} alt="Address" className="c-icon" />
                1, Adeola Odekun road, Victorial Island Lagos Nigeria.
              </div>
            </div>
          </div>
          <div className="c-right">
            <div className="c-desc">
              <b>What’s your story?</b> Get in touch. Always available for
              freelancing if the right project comes along. me.
            </div>
            <form ref={formRef} onSubmit={handleSubmit}>
              <input
                style={{ backgroundColor: darkMode && "#333" }}
                type="text"
                placeholder="Name"
                name="user_name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                style={{ backgroundColor: darkMode && "#333" }}
                type="text"
                placeholder="Subject"
                name="user_subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
              <input
                style={{ backgroundColor: darkMode && "#333" }}
                type="text"
                placeholder="Email"
                name="user_email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <textarea
                name="message"
                rows="5"
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                style={{ backgroundColor: darkMode && "#333" }}
              />
              <button type="submit">Submit</button>
              {done && console.log("email sent")}
            </form>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Contact;
