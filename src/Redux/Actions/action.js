export const fetchData = url => {
    return dispatch => {
        fetch(url).then(
            res => res.json(),
        ).then(res => dispatch({ type: 'getMovie', data: res }))
    }
}

export const searchData = searchValue => {
    return dispatch => {
        fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`).then(
            res => res.json(),
        ).then(res => dispatch({ type: 'getSearch', data: res }))
    }
}