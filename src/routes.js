import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import AboutCompany from "./pages/AboutCompany";
import Contact from "./pages/Contact";
import Course from "./pages/Course";
import Error from "./pages/404";

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
            <Route path="/course" component={Course} />
            <Route path="*" component={Error} />
          </Switch>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
