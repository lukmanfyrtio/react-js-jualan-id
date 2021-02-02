import React from "react";
import Header from "./Header.js";
import Footer from "./Footer.js";
import slide from "./slide1.png";
import "./LandingPage.css";
import { Link } from "react-router-dom";
import SettingsIcon from "@material-ui/icons/Settings";
import AppFeatures from "./AppFeatures.js";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import PhoneIcon from "@material-ui/icons/Phone";
import ScheduleIcon from "@material-ui/icons/Schedule";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PaymentIcon from "@material-ui/icons/Payment";
import DaftarBanner from "./DaftarBanner.js";

function LandingPage() {
  return (
    <div className="app">
      <Header />
      <div className="app_body">
        <div className="content1">
          <div className="narration">
            <span className="narration__bold">Aplikasi Kasir</span>
            <span className="narration__bold" style={{ paddingBottom: "8px" }}>
              Mudah Untuk Digunakan
            </span>
            <span className="narration__thin">
              Mengelola Bisnis Menjadi Lebih Mudah
            </span>
            <span className="narration__thin" style={{ paddingBottom: "8px" }}>
              Daftar Sekarang
            </span>
            <div className="signup_button">
              <Link className="signup_link" to="/signup">
                DAFTAR GRATIS
              </Link>
            </div>
          </div>
          <div className="slideImage">
            <img src={slide} alt=""></img>
          </div>
        </div>
        <div className="app_features">
          <div className="app_fetaures_header">App Features</div>
          <div className="content_app_features">
            <AppFeatures
              Icon={SettingsIcon}
              header="Kelola bisnis anda"
              subheader="mengelola bisnis menjadi lebih mudah!"
            />
            <AppFeatures
              Icon={LockOpenIcon}
              header="Kunci Target Bisnis Anda"
              subheader="Mengelola bisnis menjadi lebih mudah"
            />
            <AppFeatures
              Icon={PaymentIcon}
              header="Pilih Menu Pembayaran"
              subheader="Mengelola bisnis menjadi lebih mudah"
            />
            <AppFeatures
              Icon={ScheduleIcon}
              header="Mudah Dimegerti"
              subheader="Mengelola bisnis menjadi lebih mudah"
            />
            <AppFeatures
              Icon={PhoneIcon}
              header="Informasi Pengguna"
              subheader="Mengelola bisnis menjadi lebih mudah"
            />
            <AppFeatures
              Icon={ShoppingCartIcon}
              header="Lainnya"
              subheader="Mengelola bisnis menjadi lebih mudah"
            />
          </div>
        </div>
        <div className="daftar__banner">
          <DaftarBanner />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;
