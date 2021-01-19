export function Loader() {
 const $loader = document.createElement('img');
 $loader.id = 'loader';
 $loader.classList.add('loader');
 $loader.src = './app/assets/loader/oval-negro.svg';
 $loader.alt = 'Cargando...';

 const $styles = document.getElementById('dinamic-styles');
 $styles.innerHTML += `
 .loader {
   width: 2.5rem;
   height: 2.5rem;
   margin: 0.5rem auto;
   display: block;
  }
 `;

 return $loader;
}
