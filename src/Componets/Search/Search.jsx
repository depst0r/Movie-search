import React, { useState } from 'react'
import style from './search.module.scss'

export const Search = () => {

    const [value, setValue] = useState('')



    const searchInput = () => {

    }

    const findFilm = () => {
        console.log(value)
    }

    return<>
        <div >
            <input 
            className={style.search} 
            type="text"
            value={value}
            onChange={e => setValue(e.target.value)}
            />
            <button
            onClick={findFilm}
            >Find film</button>
        </div>
    </>
}