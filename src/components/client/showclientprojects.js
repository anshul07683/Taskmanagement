import React,{ Component } from "react";
import {connect} from 'react-redux';

import {show_project_client} from '../../actions/clientaction';
import './addproject.css';


class Showclientprojects extends Component{
	constructor(){
		super();
		this.invite= this.invite.bind(this);
	}

	invite(id){
		return(
			<div>

			</div>
		);
	}

	componentDidMount(){
		const userId=localStorage.getItem('userId')
		this.props.fetchPost()
	}

	// componentWillReceiveProps(nextProps){
	// 	if(nextProps.someValue!==this.props.someValue){
	// 		this.props.fetchPost()
	// 	}
	// }


	render(){

		const user_id=localStorage.getItem('userId')
		console.log('Client Post-- ',this.props.posts)
		return(
			<div className="container" >
				<center>
					<div className=" App-right">
						<h1 >All Projects</h1>
							{this.props.posts.length && this.props.posts.map(post=>{
								if(post && post.client_id===user_id)
									{
										return(<div class="panel-group" key={post._id}>
										<div class="panel panel-default">
											<div><h4>Project Title</h4></div>
											<div>{post.project_title}</div>
										</div>
										<div><p><b>Project Body</b>:{post.project_body}</p></div>
										<button type="button" className="btn btn-secondary" onClick={this.invite.bind(this,post._id)}>Invite Developer</button>
									</div>)
								}
							})}
						</div>
				</center>
			</div>
		);
	}
}
const mapStateToProps=state =>({

	posts:state.clients.projects,
});

const mapDispatchToProps =  dispatch =>{
	return{
		fetchPost:() => dispatch(show_project_client()),

	};
};

export default  connect(mapStateToProps,mapDispatchToProps)(Showclientprojects);