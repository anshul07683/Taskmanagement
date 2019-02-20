import React,{ Component } from "react";
const divStyle = {
  margin:'85px',
}
export default class Developerlogin extends Component{
  constructor(props){
    super(props);
    this.state={
      emmil:'',
      password:''
    }
    this.onChange = this.onChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

  }

  onChange(e){
	  this.setState({[e.target.name]:e.target.value});
  }

  handleClick(e){
		e.preventDefault();
			const logindata={
			email:this.state.email,
			password:this.state.password
		}
		console.log("LOGIN USER DATA",logindata)
		fetch('http://localhost:3003/user/developerlogin',{
			method:'POST',
			body:JSON.stringify(logindata),
			headers:{
				'Content-Type':'application/json'
			}
		}).then((res=>res.json()))
			.then(res=>{console.log(res)
			if(res.message==="Auth successfull"){
					let token=''
					return(
						console.log("successfully ..",res),
						localStorage.setItem('developertoken',res.token),
						token=localStorage.getItem('developertoken'),
            console.log('local storege---',token),
            window.location.reload()
					)
				}else{
					return alert("email or password is wronge")
				}
			}).catch(error=>console.log("error....",error))
    }


  render(){
	  return(
      <div class="container" style={divStyle}>
      <h1>Developer Login</h1>
      <form  class="form-horizontal">
        <div class="form-group">
          <label  class=" col-sm-3">User name </label><br/>
          <center><input type="text" name="email"  class="form-control col-sm-5" onChange={this.onChange}/></center>
        </div> <br/>
        <div>
          <label class=" col-sm-3">Password </label><br/>
          <center><input type="password" name="password"  class="form-control col-sm-5" onChange={this.onChange}/></center>
        </div>
        <br/>
        <button type="submit" onClick={this.handleClick}>Submit</button>
        <br/>
      </form>
    </div>
	  );
  }
}

