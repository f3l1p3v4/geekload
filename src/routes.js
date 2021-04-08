import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import AboutCompany from "./pages/AboutCompany";
import Contact from "./pages/Contact";
import AboutCourse from "./pages/AboutCourse";

export default function Routes() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <div className="main_container">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/about" component={AboutCompany} />
            <Route path="/aboutcourse" component={AboutCourse} />
          </Switch>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
