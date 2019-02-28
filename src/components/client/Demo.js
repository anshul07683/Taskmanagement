import React, { Component } from 'react';
import { add_task } from '../../actions/clientaction';
import {connect } from 'react-redux';

class Demo extends Component{
  constructor(props){
    super(props);
    this.state = {
      open: false,
      title:'',
      description:'',
      startdate:'',
      duedate:''
    };
    this.handleclick=this.handleclick.bind(this)
  }

  async handleclick(e){
    console.log("handle click")
    const userId=localStorage.getItem('userId')
    const projectId=localStorage.getItem('projectId')
    const taskdata = {
      projectId:projectId,
      title:this.state.title,
      description:this.state.description,
      startdate:this.state.startdate,
      duedate:this.state.duedate,
      assignby:userId
    }
  await this.props.addtask(taskdata)
  }

  handlechange=(e)=>{
    this.setState({[e.target.name]:e.target.value})
  }
  render(){
    return(
      <div>
        <form>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label className="small" for="title">Title</label>
              <input type="text" class="form-control" name="title" placeholder="Task Title" onChange={this.handlechange}/>
            </div>
          </div>
          <div class="form-row">
            <label className="small" for="description">Description</label>
            <input type="textarea" class="form-control" name="description" placeholder="Task Description" onChange={this.handlechange}/>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label  className="small"for="startdate">Start Date</label>
              <input type="text" class="form-control" name="startdate" onChange={this.handlechange}/>
            </div>
            <div class="form-group col-md-6">
              <label className="small" for="duedate">Due Date</label>
              <input type="text" class="form-control" name="duedate" onChange={this.handlechange}/>
            </div>
          </div>
          <button type="submit" class="btn btn-primary" onClick={this.handleclick}>ADD Task</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch=>{
  return{
    addtask:(taskdata)=>dispatch(add_task(taskdata))
  }
}

export default connect(null,mapDispatchToProps)(Demo);