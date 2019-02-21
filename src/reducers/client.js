const initialState={
  projects:[],
  developers:[]
}

const reducer = (state=initialState,action)=>{
  switch(action.type){
    case 'SHOW_POST_CLIENT':
      return{
        ...state,
        projects:action.value
      }
    case 'ADD_POST_CLIENT':
      return{
        ...state,
        projects:[...state.projects,action.value]
      }
    case 'SHOW_DEVELOPERS':
      return{
        ...state,
        developers:action.value
      }

    default :
			return state;
  }
}
export  default reducer;