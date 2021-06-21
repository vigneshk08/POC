import * as initialState from './Initstate';

const reducer = (state = initialState, action) =>{
if(action.type === "ADD"){
    return{
        ...state,
        value : state.value + action.payload
    }
}
if(action.type === "MINUS"){
    return{
        ...state,
        value : state.value - action.payload
    }
}

return state;
}

export default reducer;