import React,{ Component } from "react";
import {connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import './addproject.css';
import { add_project } from '../../actions/clientaction'


class Addproject extends Component{
  constructor(props){
	  super(props);
	  this.state = {
			title:null,
			body:null,
		}
		this.onChange = this.onChange.bind(this);
		this.onClick = this.onClick.bind(this);
	}


  onChange(e){
	  this.setState({[e.target.name]:e.target.value});
  }

  async onClick(e){
		const userId=localStorage.getItem('userId')
		const projectdata ={
			title:this.state.title,
			body:this.state.body,
			userId:userId
    }
		await this.props.addProject(projectdata);
		// window.location.reload('/')
		await this.props.history.push('/showproject');
  }
  render(){
	  return(
	    <div className="container  border border-dark App-right">

				<center>
					<h3>Add Project</h3>
					<form  class="form-horizontal">
						<div class="form-group">
							<label class=" col-sm-3">Title: </label>
							<input type="text"class="form-control col-sm-10" name="title"   onChange={this.onChange} />
						</div>
						<div>
							<label class=" col-sm-3">Body: </label>
							<textarea type="text" class="form-control col-sm-15"rows="4" cols="25" name="body" onChange={this.onChange} /><br/>
						</div>
						<button type="button" class="btn btn-secondary" onClick= {this.onClick}>Submit</button>
						<br/>
		    	</form>
				</center>
	    </div>
	  );
  }
}

const mapStateToProps = state =>{
	return {
	}
}

const mapDispatchToProps =  dispatch =>{
	return{
		addProject:(projectdata) =>dispatch(add_project(projectdata)),
	};
};

export default connect(mapStateToProps,mapDispatchToProps)(Addproject);