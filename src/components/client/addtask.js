import React,{Component} from 'react'
import Taskpopup from './taskpopup'
import Showtask from './showtask'
const divStyle = {
  margin:'85px',
}

export default class Addtask extends Component{
  constructor(props){
    super(props);
    this.state={
      popup:''

    }

  }
  openPopup=()=>{
		console.log("in open popup")
		this.setState({ popup:<Taskpopup/> })
	}
  render(){
    return(
      <div style={divStyle}>add task
      <Showtask/>
        <Taskpopup />
      </div>

    )
  }
}