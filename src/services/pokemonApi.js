const url = 'https://pokeapi.co/api/v2/pokemon/?limit=200';

export default class PokemonApiService {

  static fetchPokemonData = async () => {
    const response = await fetch(url);

    if(response.status !== 200) throw new Error('not 200');

    const data = await response.json();

    if(!data.count) throw new Error('empty data');

    return data;
  }
}