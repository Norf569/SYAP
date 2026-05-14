import { FC } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import "./Footer.adaptive.css";

const Footer: FC = () => {
  return (
    <footer className="footer">
      <div className="footer__inner">

        <div className="footer__col footer__col--brand">
          <Link className="footer__title" to="/">GALERIA</Link>
        </div>

        <div className="footer__nav-grid" aria-label="Site sections">
          <div className="footer__col">
            <h3 className="footer__title">Visits</h3>
            <ul className="footer__list">
              <li><a className="footer__link" href="#">Accessibility</a></li>
              <li><a className="footer__link" href="#">Visitor rules</a></li>
              <li><a className="footer__link" href="#">Galery plan</a></li>
              <li><a className="footer__link" href="#">Contacts</a></li>
            </ul>
          </div>

          <div className="footer__col">
            <h3 className="footer__title">Art & Artists</h3>
            <ul className="footer__list">
              <li><a className="footer__link" href="#">Artists</a></li>
              <li><a className="footer__link" href="#">Artworks</a></li>
              <li><a className="footer__link" href="#">Educational articles</a></li>
            </ul>
          </div>

          <div className="footer__col">
            <h3 className="footer__title">Exhibition</h3>
            <ul className="footer__list">
              <li><a className="footer__link" href="#">Calendar</a></li>
              <li><a className="footer__link" href="#">Archive</a></li>
              <li><a className="footer__link" href="#">Buy works</a></li>
            </ul>
          </div>
        </div>

      </div>

      <div className="footer__bottom">
        <a className="footer__bottom-link" href="#">Terms & Conditions</a>
        <a className="footer__bottom-link" href="#">Privacy Policy</a>
      </div>
    </footer>
  );
};

export default Footer;
