import React from 'react';
import { Link, Redirect, Route, Switch } from "react-router-dom";
import HomePage from './pages/Homepage/HomePage';
import Membership from './pages/Membership';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/membership" component={Membership} />
      <Route exact path="/contactus" component={ContactUs} />
      <Redirect to='/'/>
  </Switch>
  );
}

export default App;
