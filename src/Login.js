import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import logo from "./logo.png";

function Login() {
  return (
    <div className="login__page">
      <div className="login__left">
        <div className="narration_login">
          <div className="login_logo" style={{ paddingBottom: "40px" }}>
            <Link className="login_logo_link" to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <span className="narration_bold standard-header">Buat Bisnis</span>
          <span
            className="narration_bold standard-header"
            style={{ paddingBottom: "40px" }}
          >
            Menjadi Mudah
          </span>
          <span className="narration_thin standard-subheader">
            Mengelola Bisnis Menjadi Lebih Mudah,
          </span>
          <span className="narration_thin standard-subheader">
            Daftar Sekarang
          </span>
          <div className="signup_buttonk">
            <Link className="signup_linkk" to="/signup">
              DAFTAR
            </Link>
          </div>
        </div>
      </div>
      <div className="login_right">
        <div className="narration__right">
          <span className="narration__welcome  standard-header">
            Selamat Datang!
          </span>
          <span className="narration__daftar standard-subheader">
            Tidak mempunyai Akun .
            <Link
              style={{ textDecoration: "none", color: "#0f4" }}
              to="/signup"
            >
              Buat Akun Anda
            </Link>{" "}
            Sekarang Gratis !
          </span>
        </div>
        <div className="login_right_input">
          <div className="login_label">
            <label>Email</label>
          </div>
          <div className="login_input">
            <input className="input-item"></input>
          </div>
          <div className="login_label">
            <label>Password</label>
          </div>
          <div className="login_input">
            <input className="input-item"></input>
          </div>
          <div className="signin_button">
            <Link className="signin_link" to="/">
              MASUK
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
