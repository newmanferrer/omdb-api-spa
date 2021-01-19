export function MovieCard(props) {
 const d = document;
 const { imdbID, Title, Type, Year, Poster } = props;
 const urlPoster = (Poster !== 'N/A') 
  ? Poster
  : 'app/assets/img/no-image.jpg';
 let html;

 d.addEventListener('click', (event) => {
  if (!event.target.matches('.movie-card a')) return false;
  localStorage.setItem('omdbMovieId', event.target.dataset.id);
 });
  
 html = `
  <article class="movie-card">
   <img class="movie-card-img" src="${urlPoster}" alt="${Title}">
   <h2 class="movie-card-title">${Title}</h2>
   <p class="movie-card-paragraph">
    <span class="movie-card-paragraph-type">${Type}</span>
    <span class="movie-card-paragraph-year">${Year}</span>
    <a href="#/${Title}" data-id="${imdbID}" class="movie-card-paragraph-link">Ver más</a>
   </p>
  </article>
 `;

 const $styles = d.getElementById('dinamic-styles');
 $styles.innerHTML += `
  .movie-card {
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

  .movie-card-img {
   max-width: 100%;
   border: 2px solid #000000;
   border-radius: 5px;
  }

  .movie-card-title {
   margin: 0.5rem auto;
   text-align: center;
   color: #ffffff;
  }

  .movie-card-paragraph {
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
  }

  .movie-card-paragraph-type {
   text-align: center;
   font-size: 1.3rem;
   color: #ffffff;
  }

  .movie-card-paragraph-year {
   text-align: center;
   font-size: 1.3rem;
   color: #ffffff;
  }

  .movie-card-paragraph-link {
   margin-top: 1rem;
   text-align: center;
   font-size: 1.2rem;
   text-decoration: none;
   color: #ffffff;
  }

  .movie-card-paragraph-link:hover {
   transform: scale(1.1);
   outline: none;
   font-weight: bold;
   color: yellow;
  }
 `;

 return html;
}
