import React, { useEffect } from 'react'
import { Movie } from './Componets/Movie/Movie'


export const App = () => {

  // useEffect(() => {
  //   fetch('https://www.omdbapi.com/?s=man&apikey=4a3b711b')
  //   .then(res => res.json())
  //   .then(res => console.log(res))
  // }, [])

  return<>
  <Movie />
  </>
}
