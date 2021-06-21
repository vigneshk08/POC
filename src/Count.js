import React , {useEffect, useState ,useLayoutEffect} from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Button ,Label } from 'react-bootstrap';
import { propTypes } from 'react-bootstrap/esm/Image';
import {connect} from 'react-redux';
import "./Count.css";
import unique from 'unique-selector';

const Count = (pathname) =>{
    const [count,setCount] = useState(0);
    useLayoutEffect(() =>{
        console.log("use effect calling",pathname.history.location.pathname)
    },[count])
 
    return(
        <div id="test">
            <input readOnly value={count} />
            <input value ={pathname.toString()} />
            <Button name = "count" onClick={() =>rm()} >Click me to increment</Button>
        </div>
    )
}

const rm = () =>{
var ele = document.querySelectorAll("div");
console.log(ele)
for(var i=0;i<ele.length; i++){
var element = ele[i];
element.classList.add('indicatorClass');
element.addEventListener('click',(e) =>clickEvent(e), false);
}

const clickEvent = (event) =>{
  //  event.stopPropagation();
  //  event.preventDefault();
  console.log("test",event.target)
   let final = unique(event.target,{
     selectorTypes : ['ID' ,'TAG' ,'NthChild']
   })
   console.log("tets",final)
}

}

const mapStateToProps =  (state) =>{
  return {
    pathname : state.router.location.pathname
  }
}



export default connect(mapStateToProps)(Count);