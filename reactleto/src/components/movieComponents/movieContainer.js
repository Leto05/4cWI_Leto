import React, { useEffect, useState } from 'react'

export default function MovieContainer() {  

  useEffect(() => {

    document.addEventListener("DOMContentLoaded", () => {
      const params = new URLSearchParams(window.location.search);
      const film = params.get('film');
      console.log(film);
      getMovieDetail(film);
    });

    function getMovieDetail(id) {
      let output = "";
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Yjg4NGQwYmYxODQ0ZjU0MzMwNjliMjFmOGM3ZDA2ZCIsInN1YiI6IjY1Njk3ZmYyZDA0ZDFhMDBhZWYxOWJkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dt9BmASH2ZpKLQcDbTzL9NtcdLesieS0ONmNZm3eZT0'
        }
      };

      fetch('https://api.themoviedb.org/3/movie/' + id + '?language=en-US', options)
        .then(response => response.json())
        .then(response => {
          if (response.genres[0] == null) {
            response.genres[0] = { 'name': 'NaN' };
          }
          if (response.release_date == "") {
            response.release_date = "NaN";
          }

          output += '<div id="image" class="mt-5">';
          output += '<img src="https://image.tmdb.org/t/p/w500' + response.poster_path + '" alt="" srcset="" width="400px">';
          output += '</div>';
          output += '<div id="information" class="md:ml-20 mb-10">';
          output += '<div class="font-bold text-[25px] md:text-[40px]">' + response.original_title + '</div>';
          output += '<div class="text-[25px] mt-10">Length: ' + response.runtime + ' Min.</div>';
          output += '<div class="text-[25px] mt-10">Genre: ' + response.genres[0].name + '</div>';
          output += '<div class="text-[25px] mt-10">Adult: ' + response.adult + '</div>';
          output += '<div class="text-[25px] mt-10">Release Date: ' + response.release_date + '</div>';
          output += '</div>';

          document.getElementById("main").innerHTML = output;
        })
        .catch(err => console.error(err));
    }
  }, []);

  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <script src="https://cdn.tailwindcss.com"></script>
        <link rel="stylesheet" href="style.css" />
        <title>LETOFILMS ETS. 2005</title>
      </head>
      <body className="bg-[#585858] relative flex flex-col items-center overflow-x-hidden">
        <div className="relative w-[100vw] h-[15vh] bg-black flex items-center" id="header">
          <div id="img" className="mr-[100px]">
            <a href="index">
              <img src="logo.png" alt="LETOFILMS ETS. 2005" srcSet="" width="380px" className="m-1 max-h-[15vh] min-ml-[40px]" />
            </a>
          </div>
          <a href="index" className="absolute bg-[#252525] w-[10%] h-[30%] right-[10%] top-[60%] md:top-[35%] flex items-center justify-center text-white">home</a>
          <a href="about" className="absolute bg-[#252525] w-[10%] h-[30%] right-[10%] top-[10%] md:top-[35%] md:right-[30%] flex items-center justify-center text-white">about</a>
        </div>
        <div id="main" className="min-h-[85vh] h-full w-[100vw] md:w-[90vw] bg-[#252525] flex flex-col items-center justify-center md:flex-row md:items-center relative pl-7 pr-7 text-white text-bold">
        </div>
      </body>
    </html>
  )
}
