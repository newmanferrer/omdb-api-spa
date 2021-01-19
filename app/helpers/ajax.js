export async function ajax(props) {
 const { url, options, cbSuccess } = props;
 const d = document;
 
 await fetch(url, options)
  .then((response) => response.ok ? response.json() : Promise.reject(response))
  .then((json) => cbSuccess(json))
  .catch((error) => {
   console.log(error);
   const catchError = error.toString();
   let message = '';

   if (catchError === 'TypeError: Failed to fetch') {
    message = `
      <p class="error-paragraph">Error Code: 001 - Error File: ajax.js</p>
      <p class="error-paragraph">Message: Faild to fetch - Validar conexión a internet</p>
      <p class="error-paragraph">INTERNET DISCONNECTED</p>
    `;
   } else if (error.statusText) {
    message = `
      <p>${error.statusText}: Ocurrió un error al acceder a la API</p>;
    `;
   } else {
     message = `
      <p>Ocurrió un error - ajax.js</p>
     `;
   }

   const $main = d.getElementById('main');
   $main.innerHTML = `
		<div class='error'>
			<p class="error-paragraph">${message}</p>
		</div>
   `;

   const $styles = d.getElementById('dinamic-styles');
   $styles.innerHTML +=  `
    .main {
     display: flex;
     justify-content: center;
    }

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

   d.getElementById('loader').style.display = 'none';
  });
}
