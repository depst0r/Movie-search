const initialState = {
    movie: []
}

export const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'getMovie' :
            return {
                ...state,
                movie: action.data
            }
        default:
            return state
    }
}