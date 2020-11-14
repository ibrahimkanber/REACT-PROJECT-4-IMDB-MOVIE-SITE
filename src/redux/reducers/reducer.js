const initialState={
    favorites:[]
}

export const reducer=(state=initialState,action)=>{
    switch (action.type){
        case "ADD_FAVORITES":
            const newList=[...state.favorites,action.payload]
            state.favorites=newList
            
           return {...state}
        default:
            return state
    }
}