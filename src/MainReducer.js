import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import reducer from './Reducer';
import reducer1 from './Reducer1';
const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    val: reducer,
    res: reducer1
  });

  export default createRootReducer;