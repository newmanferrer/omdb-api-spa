import { Header } from "./components/Header.js";
import { Main } from "./components/Main.js";
import { Loader } from "./components/Loader.js";
import { Footer } from "./components/Footer.js";
import { Router } from "./components/Router.js";
import { infiniteScrooll } from "./helpers/infinite-scroll.js";

export function App() {
 const $root = document.getElementById('root');
 $root.innerHTML = null;

 $root.appendChild(Header());
 $root.appendChild(Loader());
 $root.appendChild(Main());
 $root.appendChild(Footer());
 
 Router();
 infiniteScrooll();
}
