import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Addproject from './addproject';
import Showclientprojects from './showclientprojects'
import showdeveloper1 from   './showdeveloper1';
import Addtask from './addtask'

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
                <Link to="/showdeveloper">show developer</Link>
                <a href="/"  onClick={this.logOut}>LogOut</a>
              </div>
            </div>

            <Route path = "/addproject" component={ Addproject}/>
            <Route path = "/showproject" component={Showclientprojects}/>
            <Route path="/showdeveloper" component={showdeveloper1}/>
            <Route path='/addtask' component={Addtask}/>
          </div>
      </Router>

    );
  }
}