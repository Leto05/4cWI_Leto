import React, { useEffect, useState } from 'react';
import LogoImage from './LogoImage';
import Button from './Button';
import Movie from './Movie';
import Header from './Header';

export default function IndexContainer() {
  const [searchValue, setSearchValue] = useState("")
  const [movies, setMovies] = useState([])
  const Images = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    function getMovieList() {
      let output = "";
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZGViYjIwMWI0MmY0MzQyOTZlMTE2MGI0NTE5NmQ5MCIsInN1YiI6IjY1NzFiNWI1OTBmY2EzMDE0ZTcxYzhmMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Rfy7I1u0ZOdhjqqIYnhjjh4oMbGu4mta05VPJNTpaaY'
        }
      };

      fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
        .then(response => response.json())
        .then(response => {

          setMovies(response.results)
        });

    }

    const apiData = getMovieList();
    getMovieList();
    console.log(apiData)
  }, []);

  function searchMovie() {
    let output = "";
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Yjg4NGQwYmYxODQ0ZjU0MzMwNjliMjFmOGM3ZDA2ZCIsInN1YiI6IjY1Njk3ZmYyZDA0ZDFhMDBhZWYxOWJkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dt9BmASH2ZpKLQcDbTzL9NtcdLesieS0ONmNZm3eZT0'
      }
    };

    fetch('https://api.themoviedb.org/3/search/movie?query=' + searchValue, options)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        if (response.results.length === 0) {
          alert("No title found :(");
        } else {
          setMovies(response.results)
        }
      });
  }

  return (
    <div>
      <Header></Header>
      <div id="main" className="bg-[#252525]">
        <div id="search" className="">
          <div className="flex flex-wrap">
            <div>
              <input type="text" value={searchValue} onChange={(el) => setSearchValue(el.target.value)} className="m-4 p-5 " placeholder="Title" id="search-input" />
            </div>
            <div className="text-white h-[5vh] min-h-[40px]">
              <Button search={"search"} onClick={() => { searchMovie() }} />
            </div>
          </div>
        </div>
        <div id="list" className=""></div>
        <div id="Title" className="">
          <div className="pt-4 text-white ml-5 text-bold">Top Movies</div>
        </div>
        <div id="list" className="grid grid-cols-4  gap-4 w-full p-10" >
          {movies.map(movie => {
            console.log(movie);
            return (
              <Movie movie={movie} imageUri={Images + movie.poster_path} overview={movie.summary} />)
          })}
        </div>
      </div>
    </div>
  );
}
//
//A 