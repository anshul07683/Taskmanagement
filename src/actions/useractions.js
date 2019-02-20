
export function add_developer(signupdata){
  console.log('add developer calling from user action',signupdata)
  return{type:'ADD_DEVELOPER',signupdata}
}
export function add_client(signupdata){
  return{type:'ADD_CLIENT',signupdata}
}
