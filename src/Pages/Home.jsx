import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'
import axios from 'axios';


const home = () => {
const [movies, setMovies] = useState(null)

  function GetMoviesList() {
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US')
  .then(function (response) {
    // handle success
    setMovies(response.data.results);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
  }
  useEffect (() => {
     GetMoviesList()
  },[])
  if (movies == null) {
    return <h1>Loading...</h1>
  }
  return (
    <div className='home'>
      {movies.map((items,index)=> {
        return (
          <>
          <Card key={index} poster={"https://image.tmdb.org/t/p/original"+ items.poster_path} name={items.title}/>
          </>
        )
      })}
    
    </div>
  )
}

export default home
