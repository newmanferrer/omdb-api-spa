export function Menu() {
 const $menu = document.createElement('nav');
 $menu.classList.add('menu');

 $menu.innerHTML = `
  <ul class="menu-ul">
   <li class="nenu-li"><a class="menu-link" href="#/">Home</a></li>
   <li class="nenu-li"><a class="menu-link" href="#/search">Búsqueda</a></li>
   <li class="nenu-li"><a class="menu-link" href="https://github.com/newmanferrer/omdb-api-spa" target="_blank" rel="noopener">Github</a></li>
  </ul>
 `;

 const $styles = document.getElementById('dinamic-styles');
 $styles.innerHTML += `
  .menu {
   display: flex;
   width: 100%;
   color: #ffffff;
   border-top: 2px solid #ffffff;
   background-color: #4169e1;
  }

  .menu-ul {
   width: 100%;
   margin: 0 auto;
   padding: 0.5rem;
   display: flex;
   justify-content: space-around;
   align-items: center;
   list-style: none;
  }

  .menu-link {
   width: 100%;
   padding: 0.2rem 1rem;
   color: white;
   text-decoration: none;
   font-size: 1.2rem;
   font-weight: bold;
   border-radius: 5px;
  }

  .menu-link:hover {
   color: #4169e1;
   background-color: white;
  }
 `;

 return $menu;
}
