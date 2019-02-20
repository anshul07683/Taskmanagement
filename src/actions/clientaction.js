export function add_project(projectdata){
  console.log('add project action',projectdata)
  return{type:'ADD_CLIENT_PROJECT',projectdata}
}

export function show_project_client()
{
  console.log('Show post calling from Actions')
  return{type:'SHOW_CLIENT_PROJECT'}
}