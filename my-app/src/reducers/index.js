import {SET_REPOS,SET_SEARCH} from "./constant";

const initialState = {
    repos: [],
    search: ""
}

function reducer(state = initialState, action) {
    switch(action.type) {
        case SET_REPOS:
            return {
                ...state,
                repos: action.repos
            };
        case SET_SEARCH:
            return {
                ...state,
                search: action.filtered
            }
        default:
            return state;
    }
}


export default reducer;