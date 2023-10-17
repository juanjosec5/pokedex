import './style.css'
import PokemonApiService from './src/services/pokemonApi.js';

let pokemonData = null;

if (localStorage.getItem('pokemon-data')) {
  pokemonData = localStorage.getItem('pokemon-data');
} else {
  PokemonApiService.fetchPokemonData()
    .then(response => {
      localStorage.setItem('pokemon-data', JSON.stringify(response.results));
      pokemonData = response.results;
    });
}

document.querySelector('#app');
