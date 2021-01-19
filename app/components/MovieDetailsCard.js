export function MovieDetailsCard(props) {
 const { Poster, Title, Type, Year, Gender, Country, Language, Actors, Director, Plot } = props;
 const urlPoster = (Poster !== 'N/A') 
  ? Poster
  : 'app/assets/img/no-image.jpg';
 let html;
  
 html = `
  <article class="movie-details-card">
   <img class="movie-details-card-img" src="${urlPoster}" alt="${Title}">
   <h2 class="movie-details-card-title">${Title}</h2>
   <p class="movie-details-card-paragraph">
    <span class="movie-details-card-paragraph-type">${Type}</span>
    <span class="movie-details-card-paragraph-year">${Year}</span>
    <span class="movie-details-card-paragraph-gender">${Gender}</span>
    <span class="movie-details-card-paragraph-country">${Country}</span>
    <span class="movie-details-card-paragraph-language">${Language}</span>
    <span class="movie-details-card-paragraph-actors">${Actors}</span>
    <span class="movie-details-card-paragraph-director">${Director}</span>
    <span class="movie-details-card-paragraph-plot">${Plot}</span>
   </p>
  </article>
 `;

 const $styles = document.getElementById('dinamic-styles');
 $styles.innerHTML += `
  .movie-details-card {
   width: 70%;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   margin: 1rem auto;
   padding: 1rem;
   border: 2px solid #000000;
   border-radius: 5px;
   box-shadow: 3px 3px 3px #000000;
   background-color: #4169e1;
  }

  .movie-details-card-img {
   max-width: 80%;
   margin: 0.5rem auto;
   border: 2px solid #000000;
   border-radius: 5px;
  }

  .movie-details-card-title {
   margin: 0.5rem auto 0.3;
   text-align: center;
   color: #ffffff;
  }

  .movie-details-card-paragraph {
   
  }

  .movie-details-card-paragraph {
   margin-top: 1rem;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
  }

  .movie-details-card-paragraph-type,
  .movie-details-card-paragraph-year,
  .movie-details-card-paragraph-gender,
  .movie-details-card-paragraph-country, 
  .movie-details-card-paragraph-language,
  .movie-details-card-paragraph-actors,
  .movie-details-card-paragraph-director,
  .movie-details-card-paragraph-plot {
   margin-top: 0.25rem;
   text-align: center;
   font-size: 1.3rem;
   color: #ffffff;
  }

  .movie-details-card-paragraph-plot {
   margin-top: 1rem;
   text-align: justify;
  }
 `;

 return html;
}