import React, { useEffect } from 'react'

export const App = () => {

  useEffect(() => {
    fetch('https://www.omdbapi.com/?s=man&apikey=4a3b711b')
    .then(res => res.json())
    .then(res => console.log(res))
  }, [])

  return<>
  <h1>App</h1>
  </>
}
