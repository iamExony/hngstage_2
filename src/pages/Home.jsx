import MovieList from "../components/MovieList";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=17b578c47751c844076a9dec1c6816a0&page=1";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=17b578c47751c844076a9dec1c6816a0&query=";

function Home() {
  const [movies, setMovies] = useState([1, 2, 3, 4]);
  const [search, setSearch] = useState("");

  const changeTheSearch = (event) => {
    // console.log(event.target.value);
    setSearch(event.target.value);
  }

  const getAllMovies = () => {
    axios.get(APIURL)
      .then(
        (response) => {
          console.log(response.data.results)
          setMovies(response.data.results.slice(0, 10));
        }
      )
      .catch(
        (error) => {
          console.log(error)
        }
      )
  }

  const getSearchedMovies = () => {
     console.log(SEARCHAPI + search)
    axios.get(
      SEARCHAPI + search
    )
      .then(
        (response) => {
          console.log(response.data.results)
          setMovies(response.data.results);
        }
      )
      .catch(
        (error) => { 
          console.log(error);
        }
      )
  }

  useEffect(
    () => {
      setMovies([]);
      // console.log("Hello");
      if (search === "") {
        getAllMovies();
      } else {
        getSearchedMovies();
      }
    },
    [search]
  )

  return (
    <div className="max-w-[1240px] shadow-xl min-h-[400px] mx-auto p-3">
      <input type="search" value={search} onChange={changeTheSearch} className="w-full border border-black rounded text-slate-700 p-4" />
      {
        movies.length === 0
          ?
          <div className="text-3xl text-center mt-2"> Loading... </div>
          :
          <MovieList movies={movies} />

      }
    </div>
  );
}

export default Home;