<script setup>
import { ref, onMounted } from 'vue'
import EntryCard from '@/components/EntryCard.vue'
import PokemonService from '@/services/PokemonService.js'

const pokemons = ref(null)

onMounted(() => {
  PokemonService.getPokemons()
    .then((response) => {
      pokemons.value = response.data
    })
    .catch((error) => {
      console.log(error)
    })
})
</script>

<template>
  <div class="entries">
    <EntryCard v-for="pokemon in pokemons" :key="pokemon.id" :pokemon="pokemon" />
  </div>
</template>

<style scoped>
.entries {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.entry-card {
  margin: 10px;
}
</style>
