import React from 'react'
import Movie from './Movie'

const MovieList = ({movies}) => {

    const movieNodes = movies.map((movie, index) => {
        return <Movie name={movie.name} url={movie.url} key={index}/>
     })

     return(
        <>
        {movieNodes}
        </>
     )
}

export default MovieList;