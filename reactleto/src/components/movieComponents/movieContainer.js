import React, { useEffect, useState } from 'react'
import LogoImage from './LogoImage';
import Header from './Header';

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

    <div>
      <Header></Header>
      <div id="main" className="min-h-[85vh] h-full w-[100vw] md:w-[100vw] bg-[#252525] flex flex-col items-center justify-center md:flex-row md:items-center relative pl-7 pr-7 text-white text-bold">
      </div>
    </div>
  )
}
//A