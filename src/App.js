import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./About.js";
import Pricing from "./Pricing.js";
import Contact from "./Contact.js";
import Product from "./Product.js";
import LandingPage from "./LandingPage.js";
import Login from "./Login.js";
import SignUp from "./SignUp.js";

function App() {
  return (
    <Router>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/about" component={About} />
      <Route exact path="/products" component={Product} />
      <Route exact path="/pricing" component={Pricing} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/signin" component={Login} />
      <Route exact path="/signup" component={SignUp} />
    </Router>
  );
}

export default App;
