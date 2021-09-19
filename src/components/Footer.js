import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => (
  <footer className="footer">
    <div className="footer__top">
      <div className="footer__column">
        <h3>Links:</h3>
        <Link to="/about">About this demo</Link>
      </div>
      <div className="footer__column"></div>
      <div className="footer__column">
        <h3>Privacy:</h3>
        <Link to="/privacy">Privacy</Link>
        <Link to="/cookies">Cookies</Link>
      </div>
    </div>
    <div className="footer__bottom">
      <div>
        Powered by:
        <Link to="https://spycedconcepts.uk" target="_blank">
          Spyced Concepts
        </Link>
        . Programmed by:
        <Link href="https://stulast.co.uk" target="_blank">
          Stu Last
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
