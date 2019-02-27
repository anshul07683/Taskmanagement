import React,{ Component } from "react";
import {connect} from 'react-redux';
import Modal from 'react-responsive-modal';
import Demo from './Demo.js';

import {show_project_client,add_comment} from '../../actions/clientaction';
import './addproject.css';
import Showdeveloper from "./showdeveloper";


class Showclientprojects extends Component{
	constructor(){
		super();

		this.state={
			comment:'',
			child:'',
			popup:''

		}
		this.onchange=this.onchange.bind(this);
	}

	onchange(e){
		this.setState({comment:e.target.value})
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

	openPopup=()=>{
		console.log("in open popup")
		this.setState({ popup:<Demo/> })
	}

	comment(id){
	const	commentdata={
			id:id,
			comments:this.state.comment
		}
		this.props.addcomment(commentdata)

	}
	render(){
		const { open } = this.state;
		const user_id=localStorage.getItem('userId')
		console.log('Client Post-- ',this.props.posts)
		return(
			<div className="container" >
				<center>
					<div className=" App-right row">
						<div class="col-sm-5">
							<h3 >All Projects</h3><br/>
								{this.props.posts.length && this.props.posts.map(post=>{
									if(post && post.client_id===user_id)
									{
										return(
											<div className="panel-group border border-dark text-center" key={post._id}>
												<div className="panel panel-default text-center">
													<div>
														<b>Project Title</b>
													</div>
													<div>{post.project_title}</div>
												</div>
												<div className="panel panel-default text-center">
													<div>
														<b>Project Body</b>
													</div>
													<div>
														<p>{post.project_body}</p>
													</div>
												</div>
												<div>
													<div>
														<b>Comments</b>
													</div>
													{	post.comments.map(comment=>{
														return(
															<div>
																{comment}
															</div>
														)
													})}
													</div>
													<div>
														{post.assigned===false?null:
														<div>
															<Demo id={post._id}/>
														<div>
															<input type="text" name="comment" onChange={this.onchange}/>
															<button type="button" onClick={this.comment.bind(this,post._id)}>Comment</button>
															</div>
														</div>}
													</div>
													<div>
														{post.developer_id?null:<button type="button" className="btn btn-secondary" onClick={this.demo.bind(this,post._id)}>Invite Developer</button>}<hr/>
													</div>
												</div>)
										}
									})}
							</div>
							<div class="col-sm-6">{this.state.child}</div>
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
		addcomment:(commentdata)=>dispatch(add_comment(commentdata))
	};
};

export default  connect(mapStateToProps,mapDispatchToProps)(Showclientprojects);