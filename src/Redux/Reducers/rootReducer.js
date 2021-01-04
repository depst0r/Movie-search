import { SEARCH_MOVIES } from '../Actions/actionType'

const initialState = {
    movie: [],
}

export const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'getMovie' :
            return {
                ...state,
                movie: action.data.Search
            }
        case SEARCH_MOVIES :
            return {
                movie: [
                    ...state,
                    action.payload
                ]
            }
        default:
            return state
    }
}