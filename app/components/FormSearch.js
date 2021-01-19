export function FormSearch() {
 const d = document;
 const $form = d.createElement('form');
 $form.classList.add('form-search');

 const $input = d.createElement('input');
 $input.classList.add('form-search-input');
 $input.name = 'formSearchInput';
 $input.type = 'search';
 $input.autocomplete = 'off';
 $input.placeholder = 'Buscar...';

 $form.appendChild($input);

 const $styles = d.getElementById('dinamic-styles');
 $styles.innerHTML += `
 .form-search {
  width: 100%;
  margin: auto;
  padding: 0.6rem;
  text-align: center;
  border-top: 2px solid #ffffff;
  background-color: #4169e1;
 }

 .form-search-input {
  width: 60%;
  margin: auto;
  padding: 0.25rem;
  font-size: 1rem;
  outline: none;
  border-radius: 0.25rem;
 }
 `;

 if (location.hash.includes('#/search')) {
  const omdbApiLastSearch = localStorage.getItem('omdbApiLastSearch');
  if (omdbApiLastSearch !== '') $input.value = omdbApiLastSearch;
 }

 d.addEventListener('search', (event) => {
  if (!event.target.matches('.form-search-input')) return false;
  if (!event.target.value) localStorage.removeItem('omdbApiLastSearch');
 });

 d.addEventListener('submit', (event) => {
  if (!event.target.matches('.form-search')) return false;
  event.preventDefault();
  const userQuery = event.target.formSearchInput.value.toLowerCase();

  if (userQuery !== '') {
   localStorage.setItem('omdbApiLastSearch', userQuery);
   location.hash = `#/search?search=${userQuery}`;
  } else {
   const $main = d.getElementById('main');
   const message = 'Por favor ingrese una búsqueda';

   $main.innerHTML = null;

   $main.innerHTML = `
    <div class="error">
     <p class="error-paragraph">${message}</p>
    </div>
   `;

   $styles.innerHTML += `
    .error {
     width: 80%;
     margin: 1rem auto;
     padding: 0.5rem 0;
     text-align: center;
     font-size: 100%;
     font-weight: bold;
     color: #ffffff;
     border-radius: 5px;
     background-color: #ff0000;
    }

    .error-paragraph {
     margin: 0.3rem 0;
     font-size: 1.2rem;
    }
   `;
  }
 });

 return $form;
}
