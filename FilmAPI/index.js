getMovieList();

function getMovieList(){
    output = "";
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Yjg4NGQwYmYxODQ0ZjU0MzMwNjliMjFmOGM3ZDA2ZCIsInN1YiI6IjY1Njk3ZmYyZDA0ZDFhMDBhZWYxOWJkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dt9BmASH2ZpKLQcDbTzL9NtcdLesieS0ONmNZm3eZT0'
        }
      };
      
      fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
        .then(response => response.json())
        .then(response => {
            console.log(response);
            response.results.forEach(element => {
                output += '<a href="movie.html?film=' + element.id + '" id="" class="w-[75vw] md:w-[280px] h-[40vh] md:h-[38vh] min-h-[400px] bg-[#3B3B3B] flex flex-col items-center justify-evenly mt-5 md:m-5">'
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
function searchMovie(name){
  output = "";
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
      if(response.results.length == 0)
      {
        alert("No title found :(")
      }else{
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
document.getElementById("search-button").addEventListener("click", ()=>{
    var ctx = document.getElementById("search-input").value;
    searchMovie(ctx);
});

document.getElementById("search-input").addEventListener("keypress",(e)=>{
  if(e.key === 'Enter')
  {
    var ctx = document.getElementById("search-input").value;
    searchMovie(ctx);
  }
  
});
