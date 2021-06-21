import {withRouter,BrowserRouter,Route, Redirect,Switch} from 'react-router-dom';
import Dashboard from './Dashboard';
 import Login from './Login';
 import Count from './Count'
import Memoexample from './Memoexample';
import Examplecallback from './Usecallbackexample';
import Counter from './Counter';
import Datechecker from './Datechecker';
import SampleJsonSort from './samplejsonsort';
import React from 'react';
const Context = React.createContext('PILLVI3')

const routes = () =>{
return(
    <Switch>
        <Route  exact path="/dashboard" component={Dashboard} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/Counter" component={Count} />
        <Route exact path="/memo" component={Memoexample} />
        <Route exact path="/callback" component={Examplecallback} />
        <Route exact path="/redux" component={Counter} />
        <Route exact path="/Datecheck" component={Datechecker} />
        <Route exact path="/SampleJsonSort" component={SampleJsonSort} />
    </Switch>
)
}



export default routes;

