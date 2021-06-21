import React,{Suspense} from 'react';
import {connect} from 'react-redux';
import Loading from './Loading';

class Counter extends React.Component{
    render(){
        return(
            <Suspense fallback = {Loading} >
            <div>
                <button onClick={() =>this.props.onIncrement()}>Add</button>
                <button onClick={() =>this.props.decrement()}>Subtract </button>
                <button onClick={() =>this.props.resulthandler(this.props.ctrval)}>Result </button>
               
                <input value={this.props.ctrval} readOnly/>
                <input value={this.props.data} readOnly/>
                {
                this.props.result.map((val) => {
                       return(
                        <li key ={val.id}>{val.value}</li>
                        )
                    })
                }
           
            </div> 
            </Suspense>
        )
    }
}

const mapStateToProps = (state) =>{
    console.log("test",state.router.location.pathname);
    console.log("test1",state.router.location.search);
    console.log("test2",state.router.location.hash);

  return{
      ctrval :  state.val.value,
      result :  state.res.results

  }
}

 const mapsDispatchToProps = (dispatch) =>{
   return{
    onIncrement: () => dispatch({type: "ADDSAGA"}),
     decrement: () => dispatch({type:"MINUS"}),
     resulthandler :(result) => dispatch({type : "RESULT" , result : result}) ,
    
   }
}

export default connect(mapStateToProps,mapsDispatchToProps)(Counter);