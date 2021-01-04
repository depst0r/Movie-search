import React, { useEffect } from 'react'
import { fetchData } from '../../Redux/Actions/action'
import { useDispatch, useSelector } from 'react-redux'

import style from './movie.module.scss'

export const Movie = () => {

   const dispatch = useDispatch()
   const selector = useSelector(state => state.movieReducer)

    useEffect(() => {
        dispatch(
            fetchData('https://www.omdbapi.com/?s=man&apikey=4a3b711b')
        )
    }, [])


    return<>
        <div className={style.movies}>
        {selector.movie.map((res, i) => (
        <div key={i}>
        <div>
        <h4>{res.Title}</h4>
        </div>
        <img className="movie__poster" src={res.Poster} alt="poster"/>
        <div className="movies ditails">{res.Year}</div>
        </div>
    ))}
        </div>
    </>
}