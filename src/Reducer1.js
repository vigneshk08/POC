

const initialState = {
    results : []
}

const reducer1 = (state = initialState, action) => {
    if(action.type === "RESULT"){
        return{
            ...state,
             results : state.results.concat({id:new Date(), value: action.result})
        }
    }
    return state;
}

export default reducer1;