import React,{Component} from 'react'
import {connect} from 'react-redux'
import {fetch_invite} from '../../actions/developeraction'

class Notification extends Component{
  constructor(){
    super();
  }

componentDidMount(){
  this.props.fetchinvite()
}
render(){
  const user_id=localStorage.getItem('userId')
  console.log('Project invitations',this.props.invite)
  return(
    <div className="container">
      <h4>all notifications</h4>
      {this.props.invite.map(invite=>{
        if(invite.developerId===user_id){
          return(
            <div>
              <div>ClientId:{invite.clientId}</div><br/>
              <div>projectId:{invite.projectId}</div>
              </div>
          )
        }
      })}

    </div>
  )
}
}

const mapStateToProps=state =>({
invite:state.developer.invite

});

const mapDispatchToProps= dispatch =>{
  return{
    fetchinvite:() =>  dispatch(fetch_invite()),
  };
};
export default  connect(mapStateToProps,mapDispatchToProps)(Notification);