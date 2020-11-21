
 export const movieReducer=(state,action)=>{
    switch (action.type){
        case "ADD_FAVORITE":
            const newList=[...state.favorites,action.payload]
            state.favorites=newList
            console.log(state)
            return{...state}
        default:
            return state 
    }
 }