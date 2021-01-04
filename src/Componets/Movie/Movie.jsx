import React, { useEffect } from 'react'
import { fetchData } from '../../Redux/Actions/action'
import { useDispatch, useSelector } from 'react-redux'

// import module from './movie.module.scss'

export const Movie = () => {

   const dispatch = useDispatch()
   const selector = useSelector(state => state.movieReducer)

    useEffect(() => {
        dispatch(
            fetchData('https://www.omdbapi.com/?s=man&apikey=4a3b711b')
        )
    }, [])


    return<>
        <div className="movies__container">
        {selector.movie.map(res => (
            <>
        <span className='movie__title'>{res.Title}</span>
        <img className="movie__poster" src={res.Poster} alt="poster"/>
        <div className="movies ditails">{res.Year}</div>
        </>
    ))}
        </div>
    </>
}