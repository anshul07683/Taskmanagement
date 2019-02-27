import React,{Component} from 'react'
import {connect} from 'react-redux'
import {fetch_invite , acceptinvite,rejectinvite} from '../../actions/developeraction'
const divStyle = {
  margin:'85px',
}
class Notification extends Component{
  constructor(){
    super();
    this.accept= this.accept.bind(this);
    this.reject = this.reject.bind(this);

  }

  accept(id){
    const data={
      id:id,
      status:true
    }
    this.props.acceptinvite(data)
  }
  reject(id){
    const data={
      id:id,
      status:null
    }
    this.props.rejectinvite(data)
  }
componentDidMount(){
  this.props.fetchinvite()
}

render(){
  const user_id=localStorage.getItem('userId')
  console.log('Project invitations',this.props.invite)
  return(
    <div className="container" style={divStyle}>
      <h4>All notifications</h4>
      {this.props.invite &&this.props.invite.map(invite=>{
        if(invite.developer_id===user_id && invite.assigned===false){
          return(
            <div>
              <div><b>Project Title</b></div>
              <div>{invite.project_title}</div><br/>
              <div><b>project Body</b></div>
              <div>{invite.project_body}</div>
              <button type="button" class="btn btn-success" onClick={this.accept.bind(this,invite._id)}>Accept</button>
              <button type="button" class="btn btn-warning" onClick={this.reject.bind(this,invite._id)}>Reject</button>
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
    acceptinvite:(data)=> dispatch(acceptinvite(data)),
    rejectinvite:(data)=> dispatch(rejectinvite(data))
  };
};
export default  connect(mapStateToProps,mapDispatchToProps)(Notification);