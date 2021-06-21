import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers ,compose} from 'redux'
import reducer from './Reducer';
import reducer1 from './Reducer1';
import createSagaMiddleware from 'redux-saga';
import { mySaga } from './sagas';
import { ConnectedRouter } from 'connected-react-router';
import {createBrowserHistory} from 'history'; 
import {routerMiddleware} from 'connected-react-router';
import Routes from './Main';
import configureStore ,{history,sagaMiddleware} from './configureStore';





const store  = configureStore();
sagaMiddleware.run(mySaga);

ReactDOM.render(
  <React.StrictMode>
   
    <Provider store={store}>
    <ConnectedRouter history ={history} >
    <Routes />
    </ConnectedRouter>
    </Provider>
   
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
