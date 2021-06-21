import {createBrowserHistory} from 'history';
import {applyMiddleware,compose,createStore} from 'redux';
import {routerMiddleware} from 'connected-react-router';
import createRootReducer from './MainReducer.js';
import createSagaMiddleware from 'redux-saga';

export const sagaMiddleware = createSagaMiddleware();

export const history = createBrowserHistory({
basename : '/vicky/'
}
);

export default function configureStore(preloadedState){
    const store = createStore(
        createRootReducer(history),
        preloadedState,
        compose(applyMiddleware(
          routerMiddleware(history),
          sagaMiddleware
          )
        )
      );
      return store;
}
