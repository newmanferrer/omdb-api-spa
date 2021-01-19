export function Title() {
 const $title = document.createElement('h1');
 $title.classList.add('title');
 $title.innerHTML = 'OMDB API - SPA (Vanilla JavaScript)';

 const $styles = document.getElementById('dinamic-styles');
 $styles.innerHTML += `
  .title {
   width: 100%;
   margin: 0 auto;
   padding: 0.5rem;
   text-align: center;
   color: #ffffff;
   background-color: #4169e1;
  }
 `;

 return $title;
}
