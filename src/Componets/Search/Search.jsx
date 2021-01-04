import React, { useState, useEffect } from 'react'
import style from './search.module.scss'
import { useSelector, useDispatch } from 'react-redux'
 
export const Search = () => {

    const [searchValue, setSearchValue] = useState('')
    const selector = useSelector(state => state.movieReducer)

    console.log(selector.movie.map(res => res.Title))

    const findFilm = () => {
        console.log(searchValue)
    }

    return<>
        <div >
            <input 
            className={style.search} 
            type="text"
            value={searchValue}
            onChange={e => setSearchValue(e.target.value)}
            />
            <button
            onClick={findFilm}
            >Find film</button>
        </div>
    </>
}