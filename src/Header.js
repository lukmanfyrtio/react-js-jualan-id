import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import logo from "./logo.png";

function Header() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <div className="header">
      <div className="header-menu" onClick={handleClick}>
        {click ? <CloseIcon /> : <MenuIcon />}
      </div>
      <div className="header_left">
        <Link to="/">
          <img className="header__logo" src={logo} alt="logo" />
        </Link>
      </div>

      <div className={click ? "header_right active" : "header_right"}>
        <div className="header_option">
          <Link className="header_links" to="/about">
            Tentang
          </Link>
        </div>

        <div className="header_option">
          <Link className="header_links" to="/products">
            Produk
          </Link>
        </div>

        <div className="header_option ">
          <Link className="header_links" to="/pricing">
            Harga
          </Link>
        </div>

        <div className="header_option">
          <Link className="header_links" to="/contact">
            Kontak
          </Link>
        </div>

        {click ? (
          <div className="header_option">
            <Link className="header_links" to="/signin">
              Masuk
            </Link>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="header_login">
        <div className="header_option signin">
          <Link className="header_links" to="/signin">
            Masuk
          </Link>
        </div>
        <Link className="header_option_signup" to="/signup">
          <div className="header_links_signup">Daftar Gratis</div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
