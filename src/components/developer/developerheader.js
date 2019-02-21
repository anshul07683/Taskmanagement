import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Allotedproject from './allotedproject'
import Notification from   './notification';

import "../Header.css";

export default class Developerheader extends React.Component
{
  constructor(props){
    super(props);
    this.logOut=this.logOut.bind(this);
  }

  logOut()
  {
    localStorage.clear();
    window.location.href = '/';
  }
  render(){
    return(
      <Router>
          <div>
            <div class="header">
              <div class="header-right">
                <Link to="/"></Link>
                <Link to="/allotedproject">show Alloted Project</Link>
                <Link to="/invitation">Project Invitation </Link>
                <a href="/"  onClick={this.logOut}>LogOut</a>
              </div>
            </div>
            <Route path="/"/>
            <Route  path="/allotedproject" component={Allotedproject}/>
            <Route  path="/invitation" component={Notification}/>
          </div>
      </Router>

    );
  }
}