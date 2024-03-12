import React, { useEffect } from 'react';
import LogoImage from './LogoImage';

export default function IndexContainer() {
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
          console.log(response);
          response.results.forEach(element => {
            output += '<a href="movie' + '" id="" class="w-[75vw] md:w-[280px] h-[40vh] md:h-[38vh] min-h-[400px] bg-[#3B3B3B] flex flex-col items-center justify-evenly mt-5 md:m-5">'
            output += '<img src="https://image.tmdb.org/t/p/w500' + element.poster_path + '" alt="" class="w-[50vw] md:w-[10vw] max-w-[170px]">'
            output += '<div class="text-[20px] m-2">'
            output += element.original_title
            output += '</div>'
            output += '</a>'
          });
          document.getElementById("list").innerHTML = output;
        })
        .catch(err => console.error(err));
    }

    function searchMovie(name) {
      let output = "";
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Yjg4NGQwYmYxODQ0ZjU0MzMwNjliMjFmOGM3ZDA2ZCIsInN1YiI6IjY1Njk3ZmYyZDA0ZDFhMDBhZWYxOWJkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dt9BmASH2ZpKLQcDbTzL9NtcdLesieS0ONmNZm3eZT0'
        }
      };
      
      fetch('https://api.themoviedb.org/3/search/movie?query=' + name, options)
        .then(response => response.json())
        .then(response => {
          console.log(response);
          if (response.results.length === 0) {
            alert("No title found :(");
          } else {
            response.results.forEach(element => {
              output += '<a href="movie.html?film=' + element.id + '" id="" class="w-[75vw] md:w-[280px] h-[40vh] md:h-[38vh] bg-[#3B3B3B] flex flex-col items-center justify-evenly mt-5 md:m-5">'
              output += '<img src="https://image.tmdb.org/t/p/w500' + element.poster_path + '" alt="" class="w-[190px]">'
              output += '<div class="text-[20px]">'
              output += element.original_title
              output += '</div>'
              output += '</a>'
            });
            document.getElementById("list").innerHTML = output;
          }
        })
        .catch(err => console.error(err));
    }
    
    const searchButton = document.getElementById("search-button");
    const searchInput = document.getElementById("search-input");
    
    if (searchButton && searchInput) {
      searchButton.addEventListener("click", () => {
        const ctx = searchInput.value;
        searchMovie(ctx);
      });

      searchInput.addEventListener("keypress", (e) => {
        if (e.key === 'Enter') {
          const ctx = searchInput.value;
          searchMovie(ctx);
        }
      });
    }

    getMovieList();
  }, []);

  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script src="https://cdn.tailwindcss.com"></script>
        <link rel="stylesheet" href="style.css" />
        <title>LETOFILMS ETS. 2005</title>
      </head>
      <body className="bg-[#585858] relative flex flex-col items-center overflow-x-hidden">
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
              <input type="text" className="w-[100%] h-[100%] rounded-[10px] bg-transparent text-[30px]" placeholder="Title" id="search-input" />
            </div>
            <div className="text-white h-[5vh] min-h-[40px]">
              <button type="button" id="search-button" className="bg-[#3B3B3B] w-[20vw] md:w-[10vw] h-[100%] ml-[50px] rounded-[10px]">
                Search
              </button>
            </div>
          </div>
          <div id="list" className="flex flex-col md:flex-row items-center md:justify-center md:flex-wrap text-white w-[100%]"></div>
          <div id="Title" className="mt-[30px] ml-[50px]">
            <div className="text-white text-[40px] font-bold">Top Movies</div>
          </div>
          <div id="list" className="flex flex-col md:flex-row items-center md:justify-center md:flex-wrap text-white w-[100%]"></div>
        </div>
      </body>
    </html>
  );
}
