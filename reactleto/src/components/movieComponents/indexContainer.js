import React, { useEffect, useState } from 'react';
import LogoImage from './LogoImage';
import Button from './Button';
import Movie from './Movie';

export default function IndexContainer() {
  const [searchValue, setSearchValue] = useState("")
  const [movies, setMovies] = useState([])

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


    getMovieList();
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
      <div className="relative w-[100vw] h-[15vh] bg-black flex items-center" id="header">
        <div id="img" className="mr-[100px]">
          <a href="index">
            <LogoImage></LogoImage>
          </a>
        </div>
        <a href="index" className="absolute bg-[#252525] w-[10%] h-[30%] right-[10%] top-[60%] md:top-[35%] flex items-center justify-center text-white">
          home
        </a>
        <a href="about" className="absolute bg-[#252525] w-[10%] h-[30%] right-[10%] top-[10%] md:top-[35%] md:right-[30%] flex items-center justify-center text-white">
          about
        </a>
      </div>
      <div id="main" className="min-h-[85vh] h-full w-[100vw] md:w-[90vw] bg-[#252525] flex flex-col items-center md:items-start relative pl-7 pr-7">
        <div id="search" className="flex items-center justify-center md:justify-start mt-5 w-[100%]">
          <div className="bg-[#D9D9D9] h-[5vh] min-h-[40px] w-[50vw] md:w-[30vw] rounded-[10px] relative left-5">
            <input type="text" value={searchValue} onChange={(el) => setSearchValue(el.target.value)} className="w-[100%] h-[100%] rounded-[10px] bg-transparent text-[30px]" placeholder="Title" id="search-input" />
          </div>
          <div className="text-white h-[5vh] min-h-[40px]">

            <Button search={"test"} onClick={() => { searchMovie() }} />
          </div>
        </div>
        <div id="list" className="flex flex-col md:flex-row items-center md:justify-center md:flex-wrap text-white w-[100%]"></div>
        <div id="Title" className="mt-[30px] ml-[50px]">
          <div className="text-white text-[40px] font-bold">Top Movies</div>
        </div>
        <div id="list" className="grid grid-cols-4  gap-4 w-full" >
          {movies.map(movie => <Movie movie={movie} />)}
        </div>
      </div>
    </div>
  );
}
//A