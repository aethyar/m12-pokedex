<script setup>
import { ref, onMounted } from 'vue'
import PokemonService from '@/services/PokemonService.js'

const thePokemon = ref(null)

const props = defineProps({
  id: { required: true }
})

onMounted(() => {
  PokemonService.getPokemon(props.id)
    .then((response) => {
      thePokemon.value = response.data
    })
    .catch((error) => {
      console.log(error)
    })
})
</script>

<template>
  <div v-if="thePokemon" class="pokemon-container">
    <h2 class="name">{{ thePokemon.name }}</h2>
    <p class="japanese-name">
      JP: <span class="italic">{{ thePokemon.japanese_name }}</span>
    </p>
    <div class="type-container">
      <div class="type-box" v-if="thePokemon.type1">{{ thePokemon.type1 }}</div>
      <div class="type-box" v-if="thePokemon.type2">{{ thePokemon.type2 }}</div>
    </div>
    <p class="evolution">{{ thePokemon.evolution }}</p>
    <img :src="thePokemon.image_url" alt="Pokemon Image" class="pokemon-image" />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Oswald&display=swap');

.pokemon-container {
  text-align: center;
  border: 1px solid #39495c;
  border-radius: 5px;
  padding: 15px;
  font-family: 'Oswald', sans-serif;
}

.japanese-name {
  font-style: italic;
  font-size: 0.9em;
}

.italic {
  font-style: italic;
}

.name {
  font-weight: bold;
}

.type-container {
  display: flex;
  margin-top: 10px;
  justify-content: center;
}

.type-box {
  margin-right: 5px;
  padding: 5px;
  border: 1px solid #39495c;
  border-radius: 5px;
}

.pokemon-image {
  max-width: 100%;
  height: auto;
  margin-top: 10px;
}
</style>
