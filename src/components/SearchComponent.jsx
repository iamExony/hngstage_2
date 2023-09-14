import React from 'react'
import MovieCard from './MovieCard'

const SearchComponent = ({searchResults}) => {
  console.log(searchResults,"Here")
  return (
    <div className="grid grid-cols-1 w-fit md:w-[90%] md:grid-cols-2 lg:grid-cols-4 gap-4 mx-auto">
        {searchResults.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
  )
}

export default SearchComponent
