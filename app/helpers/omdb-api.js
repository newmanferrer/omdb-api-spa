const KEY = '7bdaf2a9';
const API_KEY = `/?apikey=${KEY}`;
const PROTOCOL = 'https://';
const NAME = 'omdbapi';
const DOMAIN = `${PROTOCOL}${NAME}.com`;
const URL_BASE = `${DOMAIN}${API_KEY}&`;
const END_POINT_MOVIE = `${URL_BASE}i=`;
const END_POINT_SEARCH = `${URL_BASE}s=`;
const OPTIONS = {
 method: 'GET',
 'Content-Type': 'application/json'
};
let page = 1;
const moviesForPage = 10;

export default {
 KEY,
 API_KEY,
 PROTOCOL,
 NAME,
 DOMAIN,
 URL_BASE,
 END_POINT_MOVIE,
 END_POINT_SEARCH,
 OPTIONS,
 page,
 moviesForPage,
}

//* OMDB API - END POINTS (https://omdbapi.com).
//* ===============================================================================================
//* 1.- URL_BASE: url con datos de conexión a la api y permisos de usuario.
//* --------------------------------------------------------------------------------------------
//* Ejemplo: https://omdbapi.com/?apikey=7bdaf2a9&
//* --------------------------------------------------------------------------------------------

//* 2.- END_POINT_MOVIE: url para la búsqueda de película por id.
//* --------------------------------------------------------------------------------------------
//* Ejemplo: https://omdbapi.com/?apikey=7bdaf2a9&i=tt3896198
//* --------------------------------------------------------------------------------------------

//* 3.- END_POINT_SEARCH: url para la búsqueda de película por palabra clave o nombre película.
//* --------------------------------------------------------------------------------------------
//* Ejemplo: https://omdbapi.com/?apikey=7bdaf2a9&s=batman
//* --------------------------------------------------------------------------------------------

//* 4.- Search pagination added: url para búsqueda por página requerida.
//* --------------------------------------------------------------------------------------------
//* Ejemplo: https://omdbapi.com/?apikey=7bdaf2a9&s=batman&page=2
//* --------------------------------------------------------------------------------------------

//* 5.- Busqueda por año ("y" = Year of release): Necesita el titulo de la pelicula buscada.
//* --------------------------------------------------------------------------------------------
//* Ejemplo: https://omdbapi.com/?apikey=7bdaf2a9&t=batman&y=2010
//* --------------------------------------------------------------------------------------------
//* ===============================================================================================
