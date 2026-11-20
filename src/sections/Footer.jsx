
import { FiArrowUp } from "react-icons/fi";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <a
          href="#home"
          className="footer__brand"
          aria-label="Nik — back to home"
        >
          Nik<span>.</span>
        </a>

        <p className="footer__copyright">
          © {new Date().getFullYear()} Nik.
          {" "}Built with React & passion.
        </p>

        <a className="footer__top" href="#home">
          Back to top
          <FiArrowUp aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
