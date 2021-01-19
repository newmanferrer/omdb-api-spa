import { Title } from "./Title.js";
import { Menu } from "./Menu.js";
import { FormSearch } from "./FormSearch.js";

export function Header() {
 const $header = document.createElement('header');
 $header.classList.add('header');

 const $styles = document.getElementById('dinamic-styles');
 $styles.innerHTML += `
  .header {
   width: 100%;
   position: sticky;
   top: 0;
  }
 `;

 $header.appendChild(Title());
 $header.appendChild(Menu());
 $header.appendChild(FormSearch());

 return $header;
}
