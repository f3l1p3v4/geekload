import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Contact from "./pages/Contact";
import About from "./pages/About";
import AboutCourse from "./pages/AboutCourse";
import Footer from "./components/footer";

export default function Routes() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <div className="main_container">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/courses" component={Courses} />
            <Route path="/contact" component={Contact} />
            <Route path="/about" component={About} />
            <Route path="/aboutcourse" component={AboutCourse} />
          </Switch>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
