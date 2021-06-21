import React from 'react';
import Cookies from 'js-cookie'
import context from 'react-bootstrap/esm/AccordionContext';
class Login extends React.Component{
 contextType = context;
   constructor(props){
     super(props)
     this.state = {
       id : 0
     }
   }
  handlechange = (e) => {
    this.setState({id:e.target.value})
    console.log("deiiiiiiiiiiiii",this.contextType)
  }

  Submit = () => {
      let val = Cookies.get('vzid');
      if(val == "PILLVI3"){
        this.props.history.push("/dashboard");
      } else if(this.state.id == 9 ){
       // Cookies.set('vzid', 'PILLVI3', { expires: 1, path: '' });
       localStorage.setItem("lastname", "Smith");
        this.props.history.push("/dashboard");
      } 
  }

  render(){
    return(
        <div>
          <input type="number" onChange={(e) => this.handlechange(e)} />
          <button onClick={(e) => this.Submit(e)}>Login</button>
        </div>
      
    )
  }
}

export default Login;