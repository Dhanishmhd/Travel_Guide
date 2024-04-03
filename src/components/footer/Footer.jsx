import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Travel guide</h1>
        <ul className="footer__list">
          <li>
            <Link to="/home" className="footer__link">
              Home
            </Link>
          </li>
          <li>
            <Link href="/locations" className="footer__link">
              Locations
            </Link>
          </li>
          <li>
            <Link to="/planner" className="footer__link">
              Planner
            </Link>
          </li>
          <li>
            <Link to="/guidlines" className="footer__link">
              Guidelines
            </Link>
          </li>
        </ul>
        <div className="footer__social">
          <a
            href="https://www.facebook.com/"
            className="footer__social-link"
            target="_blank"
          >
            <i class="bx bxl-facebook"></i>
          </a>
          <a
            href="https://instagram.com/"
            className="footer__social-link"
            target="_blank"
          >
            <i class="bx bxl-instagram"></i>
          </a>
          <a
            href="https://twitter.com/"
            className="footer__social-link"
            target="_blank"
          >
            <i class="bx bxl-twitter"></i>
          </a>
        </div>
        <span className="footer__copy">&#169;Travel guide. All rights reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
