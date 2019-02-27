const initialState={
  invite:[],

}

const developerreducer = (state=initialState,action)=>{
  switch(action.type){
    case 'SHOW_INVITATION':
      return{
        ...state,
        invite:action.value
      }
    case 'ACCEPT_INVITE_REDUCER':
      return{
        ...state,
        invite:action.value
      }
    case 'REJECT_INVITE_REDUCER':
      return{
        ...state,
        invite:action.value
      }
    case 'ADD_COMMENT_REDUCER':
      return{
        ...state,
        invite:[...state.invite,action.value]
      }
    default :
			return state;
  }
}
export  default developerreducer;