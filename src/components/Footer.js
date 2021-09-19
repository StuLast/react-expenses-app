import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => (
  <footer className="footer">
    <div className="container footer__top ">
      <div className="footer__column">
        <h3 className="footer__heading">Links:</h3>
        <Link className="footer__link" to="/about">
          About this demo
        </Link>
      </div>
      <div className="footer__column"></div>
      <div className="footer__column">
        <h3 className="footer__heading">Privacy:</h3>
        <Link className="footer__link" to="/privacy">
          Privacy
        </Link>
        <Link className="footer__link" to="/cookies">
          Cookies
        </Link>
      </div>
    </div>
    <div className="container footer__bottom">
      <div>
        Powered by{" "}
        <a
          className="footer__link"
          href="https://spycedconcepts.uk"
          target="_blank"
        >
          Spyced Concepts
        </a>
        . Programmed by{" "}
        <a
          className="footer__link"
          href="https://stulast.co.uk"
          target="_blank"
        >
          Stu Last
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
