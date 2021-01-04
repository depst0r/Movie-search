export const fetchData = url => {
    return dispatch => {
        fetch(url).then(
            res => res.json(),
        ).then(res => dispatch({ type: 'getMovie', data: res }))
    }
}