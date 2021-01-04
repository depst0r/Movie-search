const initialState = {
    movie: [],
    loading: true,
    errorMessage: null
}

export const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'getMovie' :
            return {
                ...state,
                movie: action.data,
                loading: action.data.response,
                errorMessage: null
            }
        case 'getMoveFailure' :
            return {
                ...state,
                loading: false,
                errorMessage: action.payload
            }
        default:
            return state
    }
}