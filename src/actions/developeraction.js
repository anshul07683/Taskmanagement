export function fetch_invite(){
  console.log('fetch invite is calling from actions');
  return{type:'FETCH_INVITE'}
}

export function  acceptinvite(data){
  console.log('acceptinvite calling from action',data)
  return{type:'ACCEPT_INVITE',data}
}

export function  rejectinvite(data){
  console.log('rejectinvite calling from action',data)
  return{type:'REJECT_INVITE',data}
}