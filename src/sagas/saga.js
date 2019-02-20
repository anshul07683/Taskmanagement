import {takeLatest,call,all,put} from 'redux-saga/effects';
import {add_developer,add_client} from '../apis/user';
import { add_client_project,show_client_project} from '../apis/client';

function* adddeveloper(action){
  console.log('faculty signup is callling from saga')
  yield call(add_developer,action.signupdata)
}

function* addclient(action){
  console.log('faculty signup is callling from saga')
  yield call(add_client,action.signupdata)
  }

function* addclientproject(action){
  console.log("add client project calling from saga",action.projectdata)
  const project =yield call(add_client_project,action.projectdata)
  yield put({type:'ADD_POST_CLIENT',value:project})
}

function* showprojectclient(){
  console.log('show post client calling from saga before function call ')
  const projects = yield call(show_client_project)
  yield put({type:'SHOW_POST_CLIENT',value:projects})
  console.log('show post client calling from saga',projects)
}

export default  function*  rootSaga(){
  yield all([
    yield takeLatest('ADD_DEVELOPER',adddeveloper),
    yield takeLatest('ADD_CLIENT',addclient),
    yield takeLatest('ADD_CLIENT_PROJECT',addclientproject),
    yield takeLatest('SHOW_CLIENT_PROJECT',showprojectclient)
  ])
}