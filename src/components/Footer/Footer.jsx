import React from "react";
import "./Footer.css";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* LEFT LOGO */}
        <div className="footer-logo">
          {"< >"} Abishek.<span>S</span>
        </div>


        {/* CENTER SECTION */}
        <div className="footer-center">

         

          <p className="copyright">
            © 2026 Abishek. All rights reserved.
          </p>

        </div>


        {/* RIGHT TEXT */}
        <div className="footer-right">
          Made with 💙 and passion <span>Abishek Sachithanandham</span>
        </div>

      </div>

    </footer>
  );
};

export default Footer;