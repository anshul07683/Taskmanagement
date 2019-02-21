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
    default :
			return state;
  }
}
export  default developerreducer;