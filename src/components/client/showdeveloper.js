
import React,{ Component } from "react";
import {connect} from 'react-redux';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import {show_developers,invite_developer} from '../../actions/clientaction';
const divStyle = {
  margin:'85px',
}
class Showdeveloper extends Component{
  componentDidMount(){
  this.props.fetchdeveloper()
	}

	render(){
		const projectId= this.props.id
		const clientId= localStorage.getItem('userId')
		const postitems = this.props.developers.map(developer =>
			(<div  key={developer._id}>
				<div>Name:{developer.name}</div>
				<div>Email{developer.email}</div>
				<button type="button" class="btn btn-sm btn-dark" onClick={()=>this.props.invite(developer._id,developer.email,clientId,projectId)}>invite</button><span>  </span>
			</div>)
		);
		return(
				<div style={divStyle}>
					<center>
						<h4>Developers</h4>
						{postitems}
					</center>
				</div>
		);
	}
}
const mapStateToProps=state =>({

	developers:state.clients.developers,
});

const mapDispatchToProps =  dispatch =>{
	return{
		fetchdeveloper:() => dispatch(show_developers()),
		invite:(_id,developeremail,clientId,projectId)=> dispatch(invite_developer(_id,developeremail,clientId,projectId))
	};
};

export default  connect(mapStateToProps,mapDispatchToProps)(Showdeveloper);
