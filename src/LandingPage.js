import React from "react";
import Header from "./Header.js";
import Footer from "./Footer.js";

function LandingPage() {
  return (
    <div className="app">
      <Header />
      <div className="app_body">
        <h2>landing page</h2>
      </div>
      <Footer/>
    </div>
  );
}

export default LandingPage;
