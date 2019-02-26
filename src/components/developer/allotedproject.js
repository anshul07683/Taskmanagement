import React,{Component} from 'react'
import {connect} from 'react-redux'
import {fetch_invite } from '../../actions/developeraction'

const divStyle = {
  margin:'85px',
}

class Allotedproject extends Component{
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
    <div  style={divStyle}>
      <h4>All  Accepted projects</h4>
      {this.props.invite &&this.props.invite.map(invite=>{
        if(invite.developer_id===user_id && invite.assigned===true){
          return(
            <div className="container">
              <div class="panel-group">
                <div  class="panel panel-default">
                  <div class="panel-heading"><b>Project Title</b></div>
                  <div class="panel-body">{invite.project_title}</div><br/>
                  <div><b>project Body</b></div>
                  <div>{invite.project_body}</div>
                </div>
              </div>
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
      fetchinvite:() =>  dispatch(fetch_invite())

  }
};
export default  connect(mapStateToProps,mapDispatchToProps)(Allotedproject);