import { App } from './App.js';
import omdbApi from './helpers/omdb-api.js';


document.addEventListener('DOMContentLoaded', App);
window.addEventListener('hashchange', () => {
 omdbApi.page = 1;
 App();
});
