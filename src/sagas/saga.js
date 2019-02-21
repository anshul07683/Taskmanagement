import {takeLatest,call,all,put} from 'redux-saga/effects';
import {add_developer,add_client} from '../apis/user';
import { add_client_project,show_client_project,show_developers,invite_developer} from '../apis/client';
import { fetch_invite} from '../apis/developer'



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

function* showdeveloper(){
  console.log('show  developer is calling from saga');
  const developer = yield call(show_developers)
  yield put({type:'SHOW_DEVELOPERS',value:developer})

}

function* invitedeveloper(action){
  console.log('invite developer from saga',action.invitedata)
  const invite = yield call(invite_developer,action.invitedata)
}

function* fetchinvite(){
  console.log('fetch invite calling from saga')
  const invitation=yield call(fetch_invite);
  yield put({type:'SHOW_INVITATION',value:invitation})

}

export default  function*  rootSaga(){
  yield all([
    yield takeLatest('ADD_DEVELOPER',adddeveloper),
    yield takeLatest('ADD_CLIENT',addclient),
    yield takeLatest('ADD_CLIENT_PROJECT',addclientproject),
    yield takeLatest('SHOW_CLIENT_PROJECT',showprojectclient),
    yield takeLatest('SHOW_DEVELOPER',showdeveloper),
    yield takeLatest('INVITE_DEVELOPER',invitedeveloper),
    yield takeLatest('FETCH_INVITE',fetchinvite)

  ])
}