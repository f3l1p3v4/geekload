import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Home';
import Courses from './pages/Courses';
import Contact from './pages/Contact';
import About from './pages/About';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/courses" component={Courses} />
                <Route path="/contact" component={Contact} />    
                <Route path="/about" component={About} />    
            </Switch>
        </BrowserRouter>
    );
}