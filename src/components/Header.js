import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Clientsignup from "./clientsignup"
import Developersignup from "./developersignup";
import clientlogin from './clientlogin';
import developerlogin from './developerlogin'
import Home from './Home'

import "./Header.css";

export default class Header extends React.Component
{
  render(){
    return(
      <Router>
          <div>
            <div class="header">
              <div class="header-right">
                <Link exact to="/">Home</Link>
                <Link to="/clientlogin">Client Login</Link>
                <Link to="/developerlogin">Developer Login</Link>
                <Link to="/clientsignup">Client Signup </Link>
                <Link to="/developersignup">developer Signup</Link>
              </div>
            </div>
            <hr/>
            <Route exact path="/" component={Home}/>
            <Route exact path="/clientlogin" component={clientlogin}/>
            <Route exact path="/developerlogin" component={developerlogin}/>
            <Route exact path="/clientsignup" component={Clientsignup}/>
            <Route exact path="/developersignup" component={Developersignup }/>

          </div>
      </Router>

    );
  }
}