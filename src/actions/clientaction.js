export function add_project(projectdata){
  console.log('add project action',projectdata)
  return{type:'ADD_CLIENT_PROJECT',projectdata}
}

export function show_project_client()
{
  console.log('Show post calling from Actions')
  return{type:'SHOW_CLIENT_PROJECT'}
}

export function show_developers()
{
  console.log('Show post developers')
  return{type:'SHOW_DEVELOPER'}
}

export function invite_developer(_id,developeremail,clientId,projectId){
  console.log('invite developer from action',_id,developeremail,clientId,projectId)
  const invitedata={
    developerId:_id,
    developeremail:developeremail,
    clientId:clientId,
    projectId:projectId
  }
  return{type:'INVITE_DEVELOPER',invitedata}
}
export function add_comment(commentdata){
  console.log('add comment ',commentdata)
  return{type:'ADD_COMMENT',commentdata}
}
export function add_task(taskdata){
  console.log("task data",taskdata);
  return{type:'ADD_TASK',taskdata}
}