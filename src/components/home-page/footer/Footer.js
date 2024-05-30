import React from "react";
import ProjectIcon from "../../../assets/project-icon.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="form">
        <div className="form-icon">
          <img src={ProjectIcon} alt="" width={80} />
        </div>
        <div className="form-text">
          <span>Proje fikirleriniz için buradayız.</span>
          <p>
            Sizlerle tanışabilmemiz için bizimle iletişime geçmeniz yeterli.{" "}
          </p>
        </div>
        <div className="button">
          <button className="form-btn">Proje Formu </button>
        </div>
      </div>
      <div className="copy-right">
        <p className="copy-right-text">
          ModernArc Mimarlık © 2024 Tüm hakları saklıdır.
        </p>
      </div>
    </div>
  );
};

export default Footer;
