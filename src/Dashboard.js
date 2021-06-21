
import React from 'react';
import Cookies from 'js-cookie'
class Dashboard extends React.Component {

    state ={
        login : true
    }
    
    componentDidMount(){
       // let val = Cookies.get('vzid');
      let val = localStorage.getItem("lastname");
        if(val){
            this.setState({login: false})
        }else{
            this.props.history.push("/login");
        }
    }

    logout = () =>{
        this.props.history.push("/login");
    }

     render(){
        return (
            <div hidden={this.state.login}>
            Welcome to Dashboard!
            <button onClick={this.logout}>Logout</button>
            </div>
          );
    }
}


export default Dashboard;
