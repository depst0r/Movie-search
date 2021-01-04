import { SEARCH_MOVIES } from './actionType'

export const fetchData = url => {
    return dispatch => {
        fetch(url).then(
            res => res.json(),
        ).then(res => dispatch({ type: 'getMovie', data: res }))
    }
}

export const searchMovies = value => ({ type: SEARCH_MOVIES, payload: value })