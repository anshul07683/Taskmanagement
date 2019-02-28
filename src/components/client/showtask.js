import React,{Component} from 'react'

export default class Showtask extends Component{
  render(){
    const projectTitle=localStorage.getItem('projectTitle')
    console.log("Project Title",projectTitle)
    return(
      <div className="border border-primary float-left">
        <div>
          <h3>{projectTitle}</h3>
        </div>
        <form className="">
          <div>
            <input type="text" name="list" placeholder="enter Your List"/>
          </div>
          <div>
            <button type="button">Add List</button>
          </div>
        </form>

      </div>

    );
  }
}