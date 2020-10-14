import React from "react";
import Header from "./Header.js";
import Footer from "./Footer.js";

function Product() {
  return (
    <div>
      <div className="app">
        <Header />
        <div className="app_body">
          <h2>product</h2>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Product;
