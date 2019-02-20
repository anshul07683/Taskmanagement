import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Addproject from './addproject';
import Showclientprojects from './showclientprojects'

import "../Header.css";

export default class Clientheader extends React.Component
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
                <Link to="/addproject">Add Project</Link>
                <Link to="/showproject">Show Project </Link>
                <a href="/"  onClick={this.logOut}>LogOut</a>
              </div>
            </div>

            <Route  exact path="/addproject" component={Addproject}/>
            <Route path = "/showproject" component={Showclientprojects}/>
          </div>
      </Router>

    );
  }
}