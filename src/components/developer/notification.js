import React,{Component} from 'react'
import {connect} from 'react-redux'
import {fetch_invite} from '../../actions/developeraction'
export default class Notification extends Component{
  constructor(){
    super();
  }
componentDidMount(){
  this.props.fetchinvite()
}
render(){
  return(
    <div>
      <h4>all notifications</h4>

    </div>
  )
}
}

const mapDispatchToProps= dispatch=>{
  return{
    fetchinvite:() =>dispatch(fetch_invite()),
  }
}