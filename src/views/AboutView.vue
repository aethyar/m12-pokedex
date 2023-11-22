<script setup>
import { ref, onMounted } from 'vue'
import { db } from '@/js/firebase.js'
import { collection, onSnapshot } from 'firebase/firestore'

import EntryCard from '@/components/EntryCard.vue'

const pokemons = ref([])

async function getPokemons() {
  onSnapshot(collection(db, 'pokemons'), (querySnapshot) => {
    let pokemonsSnapshot = []
    querySnapshot.forEach((doc) => {
      let pokemon = {
        id: doc.id,
        name: doc.data().name,
        type1: doc.data().type1,
        type2: doc.data().type2,
        japanese_name: doc.data().japanese_name,
        evolution: doc.data().evolution,
        image_url: doc.data().image_url
      }
      pokemonsSnapshot.push(pokemon)
    })
  pokemons.value = pokemonsSnapshot
  })
}

onMounted(async () => {
  console.log('Connecting to Firebase')
  await getPokemons()
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
