import React from "react";
import { Link } from "react-router-dom";
import "./DaftarBanner.css";
import slide2 from "./slide2.png";

function DaftarBanner() {
  return (
    <div className="signup__banner">
      <div className="signup__banner__image">
        <img src={slide2} alt=""></img>
      </div>
      <div className="signup__banner__narration">
        <span className="narration__bold__banner">Kelola Bisnis Anda</span>
        <span
          className="narration__bold__banner"
          style={{ paddingBottom: "8px" }}
        >
          Kapanpun dimanapun
        </span>
        <span className="narration__thin_banner">
          Mengelola Bisnis Menjadi Lebih Mudah
        </span>
        <span
          className="narration__thin_banner"
          style={{ paddingBottom: "8px" }}
        >
          Daftar Sekarang
        </span>
        <div className="signup_button">
          <Link className="signup_link" to="/signup">
            DAFTAR SEKARANG
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DaftarBanner;
