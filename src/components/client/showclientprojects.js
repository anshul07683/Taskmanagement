import React,{ Component } from "react";
import {connect} from 'react-redux';

import {show_project_client} from '../../actions/clientaction';
import './addproject.css';
import Showdeveloper from "./showdeveloper";


class Showclientprojects extends Component{
	constructor(){
		super();

		this.state={
			child:''
		}
	}


	componentDidMount(){
		this.props.fetchPost()
	}

	componentWillReceiveProps(nextProps){
		if(nextProps.someValue!==this.props.someValue){
			this.props.fetchPost()
		}
	}
	demo(id){
		this.setState({
			child:<Showdeveloper id={id}/>
		})
	}

	render(){
		const user_id=localStorage.getItem('userId')
		console.log('Client Post-- ',this.props.posts)
		return(
			<div className="container" >
				<center>
					<div className=" App-right row">
						<div class="col-sm-4">
							<h3 >All Projects</h3><br/>
								{this.props.posts.length && this.props.posts.map(post=>{
									if(post && post.client_id===user_id)
									{
										return(
											<div class="panel-group" key={post._id}>
												<div class="panel panel-default">
													<div><h5>Project Title</h5></div>
													<div>{post.project_title}</div>
												</div>
												<div>
													<div><b>Project Body</b></div>
													<div><p>{post.project_body}</p></div>
												</div>
												<button type="button" className="btn btn-secondary" onClick={this.demo.bind(this,post._id)}>Invite Developer</button><hr/>
											</div>)
									}
								})}
						</div>
							<div class="col-sm-4">{this.state.child}</div>
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