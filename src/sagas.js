import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import axios from 'axios';
import {push} from 'connected-react-router'


// worker Saga: will be fired on USER_FETCH_REQUESTED actions
 function* fetchUser() {
   let val ;
   try {
     // const user = yield call(Api.fetchUser, action.payload.userId);
     // yield put({type: "USER_FETCH_SUCCEEDED", user: user});
  //  yield put({type:"ADD"});
  let res = yield axios.get('http://localhost:3001/users')
   // yield put(push('/addition'))
     yield put({type :"ADD" ,payload : res.data.user.value})
     
   } catch (e) {
      yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
// function* mySaga() {
//   yield takeEvery("USER_FETCH_REQUESTED", fetchUser);
// }

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
export function* mySaga() {
  yield takeLatest("ADDSAGA", fetchUser);
}

