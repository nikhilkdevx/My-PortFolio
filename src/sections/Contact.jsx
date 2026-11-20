
import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FiMail,
  FiMapPin,
  FiSend,
  FiArrowUpRight,
} from "react-icons/fi";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import "./Contact.css";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/nikhilkdevx",
    Icon: FaGithub,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/nikhilkumarkeshari",
    Icon: FaLinkedinIn,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/nkdevx/",
    Icon: FaInstagram,
  },
];

const initialForm = {
  name: "",
  email: "",
  message: "",
};

function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (status !== "sending") {
      setStatus("idle");
      setFeedback("");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (status === "sending") return;

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus("error");
      setFeedback("Contact form is not configured yet.");
      return;
    }

    setStatus("sending");
    setFeedback("");

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: form.name.trim(),
          reply_to: form.email.trim(),
          message: form.message.trim(),
        },
        { publicKey }
      );

      setStatus("success");
      setFeedback("Message sent! I'll get back to you soon.");
      setForm(initialForm);
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
      setFeedback(
        "Couldn't send your message. Please try again or email me directly."
      );
    }
  };

  return (
    <section
      className="contact"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className="container">
        <header className="contact__header">
          <span className="contact__eyebrow">
            HAVE A PROJECT IN MIND?
          </span>

          <h2 className="contact__title" id="contact-title">
            Let's build something <span>great.</span>
          </h2>

          <p className="contact__intro">
            Open to internships, collaborations, and
            meaningful opportunities.
          </p>
        </header>

        <div className="contact__grid">
          <div className="contact__card contact__info">
            <div>
              <h3 className="contact__card-title">
                Let's connect.
              </h3>

              <p className="contact__description">
                Have an idea, an opportunity, or just want
                to say hello? My inbox is open.
              </p>
            </div>

            <div className="contact__details">
              <a
                className="contact__detail"
                href="mailto:nkdevx.tech@gmail.com"
              >
                <span className="contact__detail-icon">
                  <FiMail />
                </span>

                <span className="contact__detail-text">
                  <span className="contact__detail-label">
                    EMAIL
                  </span>
                  <span className="contact__detail-value">
                    nkdevx.tech@gmail.com
                  </span>
                </span>

                <FiArrowUpRight className="contact__detail-arrow" />
              </a>

              <div className="contact__detail">
                <span className="contact__detail-icon">
                  <FiMapPin />
                </span>

                <span className="contact__detail-text">
                  <span className="contact__detail-label">
                    LOCATION
                  </span>
                  <span className="contact__detail-value">
                    India · Remote friendly
                  </span>
                </span>
              </div>
            </div>

            <div className="contact__social-area">
              <p className="contact__social-label">
                Find me online
              </p>

              <div className="contact__social-links">
                {socialLinks.map(({ name, url, Icon }) => (
                  <a
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    title={name}
                    className="contact__social-link"
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="contact__card">
            <h3 className="contact__card-title">
              Send a message
            </h3>

            <form
              className="contact__form"
              onSubmit={handleSubmit}
            >
              <div className="contact__field">
                <label htmlFor="contact-name">
                  Your name
                </label>

                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  autoComplete="name"
                  maxLength={100}
                  required
                  disabled={status === "sending"}
                />
              </div>

              <div className="contact__field">
                <label htmlFor="contact-email">
                  Email address
                </label>

                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  autoComplete="email"
                  maxLength={254}
                  required
                  disabled={status === "sending"}
                />
              </div>

              <div className="contact__field">
                <label htmlFor="contact-message">
                  Your message
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your idea..."
                  rows={5}
                  minLength={10}
                  maxLength={3000}
                  required
                  disabled={status === "sending"}
                />
              </div>

              <button
                type="submit"
                className="contact__submit"
                disabled={status === "sending"}
              >
                <FiSend />
                {status === "sending"
                  ? "Sending..."
                  : "Send Message"}
              </button>

              <p
                className={`contact__feedback contact__feedback--${status}`}
                role={status === "error" ? "alert" : "status"}
                aria-live="polite"
              >
                {feedback}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
