import omdbApi from './omdb-api.js';
import { ajax } from './ajax.js';
import { MovieCard } from '../components/MovieCard.js';

export function infiniteScrooll() {
 const d = document;
 const w = window;
 const $main = d.getElementById('main');
 const $loader = d.getElementById('loader');
 const $styles = d.getElementById('dinamic-styles');
 const omdbApiLastSearch = localStorage.getItem('omdbApiLastSearch');
 const { hash } = w.location;

 if (hash.includes('#/search')) {
  w.addEventListener('scroll', async () => {
   const { scrollTop, clientHeight, scrollHeight } = d.documentElement;
   const percent = 0.90;
   const scrollH = ((scrollHeight) * (percent));
  
   if ((scrollTop + clientHeight) >=scrollH) {
    omdbApi.page++;
    let html = '';
    $loader.style.display = 'block';

    await ajax({
     url: `${omdbApi.END_POINT_SEARCH}${omdbApiLastSearch}&page=${omdbApi.page}`,
     options: omdbApi.OPTIONS,
     cbSuccess: ((search) => {
      if (search.Response === 'True') {
       const movies = search.Search;
       const totalPages = Math.ceil((search.totalResults) / (omdbApi.moviesForPage));

       if (omdbApi.page <= totalPages) {
        movies.forEach((movie) => html += MovieCard(movie));
        $main.insertAdjacentHTML('beforeend', html);
       } 
      } else {
       html = `
        <div class="no-more-movies">
         <p class="no-more-movies-paragraph">No más películas para esta búsqueda...</p>
        </div>
       `;

       $styles.innerHTML += `
        .no-more-movies {
         width: 70%;
         display: flex;
         flex-direction: column;
         margin: 1rem auto;
         padding: 1rem;
         border: 2px solid #000000;
         border-radius: 5px;
         box-shadow: 3px 3px 3px #000000;
         background-color: #4169e1;
        }

        .no-more-movies-paragraph {
         text-align: center;
         color: #ffffff;
         font-size: 1.2rem;
        }
       `;

       $main.insertAdjacentHTML('beforeend', html);
      }
     })
    });
    $loader.style.display = 'none';
   }
  });
 }
}
