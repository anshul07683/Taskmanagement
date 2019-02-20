import React,{ Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {add_client} from '../actions/useractions.js'
import {connect } from 'react-redux';
import Clientlogin from './clientlogin'

const divStyle = {
  margin:'85px',
}

//import store from '../store'

class Clientsignup extends Component{
  constructor(props){
    super(props);
    this.state={
			name:null,
			contact:null,
      email:null,
			password:null,
			confirmpassword:null
    }
    this.onChange = this.onChange.bind(this);
		this.handleClick = this.handleClick.bind(this);

  }
  onChange(e){
	  this.setState({[e.target.name]:e.target.value});
  }

	handleClick(e){
		e.preventDefault();
		if(this.state.password===this.state.confirmpassword)
		{
			const signupdata={
				name:this.state.name,
				contact:this.state.contact,
				email:this.state.email,
				password:this.state.password
			}
			this.props.createUser(signupdata);
			this.props.history.push('/Clientlogin')
  	}
    else{
      alert("password not match")
    }
}
  render(){
	  return(
	    <div class="container" style={divStyle}>
		    <h1> Client Registration </h1>
		    <form class="form-horizontal">
					<div class="form-group">
			      <label class=" col-sm-1">Name </label>
			      <center><input type="text" name="name" class="form-control col-sm-5"placeholder="Enter Your Name" onChange={this.onChange} required/></center>
			    </div>

					<div class="form-group">
			      <label class=" col-sm-3">Contact Number </label><br/>
			      <center><input type="text" class="form-control col-sm-5" name="contact"maxLength="10"  placeholder="Enter Your Contact No" onChange={this.onChange} required/></center>
			    </div>

          <div class="form-group">
			      <label class=" col-sm-3">Email</label>
			      <center> <input type="text" class="form-control col-sm-5" name="email" placeholder="enter your email address"   onChange={this.onChange} required/></center>
			    </div>

		      <div class="form-group">
						<label class=" col-sm-3">Password </label><br/>
						<center><input type="password" class="form-control col-sm-5" name="password"  placeholder="enter your password" onChange={this.onChange}required/></center>
					</div>

					<div class="form-group">
						<label class="col-sm-3">Confire Password </label>
					  <center><input type="password"  class="form-control col-sm-5" name="confirmpassword" placeholder="please re-enter your password" required  onChange={this.onChange}/></center>
					</div>

					<button class="btn btn-primary"type="button" onClick={this.handleClick}>Submit</button>
		    </form>
	    </div>
	  );
  }
}
const mapStateToProps = state=>{
  return {

  }
}
const mapDispatchToProps = dispatch =>{
  return {
    createUser:(signupdata)=>dispatch(add_client(signupdata))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Clientsignup);