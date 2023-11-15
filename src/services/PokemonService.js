import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/aethyar/m12-pokedexdata',
  withCredentials: false,
  headers: {
    Accept: 'application/json', // what client expect
    'Content-Type': 'application/json' // descriping our request content (none here)
  }
})

export default {
  getPokemons() {
    return apiClient.get('/pokemons')
  },
  getPokemon(id) {
    return apiClient.get('/pokemons/' + id)
  }
}
