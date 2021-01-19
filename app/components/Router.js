import omdbApi from '../helpers/omdb-api.js';
import { ajax } from '../helpers/ajax.js';
import { MovieCard } from './MovieCard.js';
import { MovieDetailsCard } from './MovieDetailsCard.js';

export async function Router() {
 const d = document;
 const $main = d.getElementById('main');
 const $loader = d.getElementById('loader');
 const { hash } = location;

 if ((!hash) || (hash === '#/')) {
  const page = ((Math.round(Math.random() * 5)) + 1);

  await ajax({
   url: `${omdbApi.END_POINT_SEARCH}movie&page=${page}`,
   options: omdbApi.OPTIONS,
   cbSuccess: (async (search) => {
    if (search.Response === 'True') {
     const movies = search.Search;
     let html = '';
     movies.forEach((movie) => html += MovieCard(movie));
     $main.innerHTML = html;
    } else {
     console.log('Error: Router.js if home');
    }
   })
  });
 } else if (hash.includes('#/search')) {
  const omdbApiLastSearch = localStorage.getItem('omdbApiLastSearch');

  if (omdbApiLastSearch === null) {
   $loader.style.display = 'none';
   return false;
  } else if (omdbApiLastSearch !== '') {
   await ajax({
    url: `${omdbApi.END_POINT_SEARCH}${omdbApiLastSearch}`,
    options: omdbApi.OPTIONS,
    cbSuccess: ((search) => {
     if (search.Response === 'True') {
      const movies = search.Search;
      let html = '';
      movies.forEach((movie) => html += MovieCard(movie));
      $main.innerHTML = html;
     }
    })
   });
  }
 } else {
  const omdbID = localStorage.getItem('omdbMovieId');
  
  await ajax({
   url: `${omdbApi.END_POINT_MOVIE}${omdbID}`,
   options: omdbApi.OPTIONS,
   cbSuccess: ((movie) => {
    let html = '';
    html = MovieDetailsCard(movie);
    $main.innerHTML = html;
   })
  });
 }
 $loader.style.display = 'none';
}  
