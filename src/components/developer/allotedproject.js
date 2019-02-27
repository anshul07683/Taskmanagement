import React,{Component} from 'react'
import {connect} from 'react-redux'
import {fetch_invite } from '../../actions/developeraction'
import {add_comment} from '../../actions/clientaction';
const divStyle = {
  margin:'85px',
}

class Allotedproject extends Component{
  constructor(){
    super();
    this.state={
      comment:''
    }
  this.onchange=this.onchange.bind(this);
  }
  onchange(e){
		this.setState({comment:e.target.value})
  }
  comment(id){
    const	commentdata={
        id:id,
        comments:this.state.comment
      }
      this.props.addcomment(commentdata)

    }

  componentDidMount(){
    this.props.fetchinvite()
  }

render(){
  const user_id=localStorage.getItem('userId')
  console.log('Project invitations',this.props.invite)
  return(
    <div className="container" style={divStyle}>
      <h4>All  Accepted projects</h4>
      {this.props.invite &&this.props.invite.map(invite=>{
        if(invite.developer_id===user_id && invite.assigned===true){
          return(
            <div >
              <div className="panel-group border border-dark text-center">
                <div  className="panel panel-default text-center">
                  <div ><b>Project Title</b></div>
                  <div class="panel-body">{invite.project_title}</div><br/>
                  <div><b>project Body</b></div>
                  <div>{invite.project_body}</div>
                  <div><div><b>Comments</b></div>
													{invite.comments.map(comment=>{return(<div>
														{comment}
													</div>)})}</div>
                          <div>
														<input type="text" name="comment" onChange={this.onchange}/>
														<button type="button" onClick={this.comment.bind(this,invite._id)}>Comment</button>
													</div>
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
      fetchinvite:() =>  dispatch(fetch_invite()),
      addcomment:(commentdata)=>dispatch(add_comment(commentdata))

  }
};
export default  connect(mapStateToProps,mapDispatchToProps)(Allotedproject);