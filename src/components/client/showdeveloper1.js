import React,{ Component } from "react";
import {connect} from 'react-redux';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import {show_developers,invite_developer} from '../../actions/clientaction';
const divStyle = {
  margin:'85px',
}
class Showdeveloper1 extends Component{
	constructor(props){
		super(props);
	}

	componentDidMount(){
		this.props.fetchdeveloper()
	}

	render(){
		return(
			<div style={divStyle} className="container">
				<h3>All Developers </h3>
				<table className="table float-lg-left">
					<thead>
						<tr className="text-left">
							<th >Name</th>
							<th >Email</th>
						</tr>
					</thead>
						{this.props.developers.map(developer =>
							(<div  key={developer._id}>
								<tbody >
									<tr className="text-left">
										<td class="col-2" >{developer.name}</td>
										<td class="col-2"  >{developer.email}</td>
									</tr>
								</tbody>
							</div>)
							)
						}
				</table>
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
		invite:(_id,clientId,projectId)=> dispatch(invite_developer(_id,clientId,projectId))
	};
};

export default  connect(mapStateToProps,mapDispatchToProps)(Showdeveloper1);