<script setup>
defineProps({
  pokemon: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <RouterLink
    :to="{ name: 'pokemon-details', params: { id: pokemon.id } }"
    style="
      display: inline-block;
      text-decoration: none;
      color: black;
      font-family: 'Oswald', sans-serif;
    "
  >
    <div class="entry-card">
      <h2 class="name">{{ pokemon.name }}</h2>
      <div class="type-container">
        <div class="type-box" v-if="pokemon.type1">{{ pokemon.type1 }}</div>
        <div class="type-box" v-if="pokemon.type2">{{ pokemon.type2 }}</div>
      </div>
      <div class="image-container">
        <img :src="pokemon.image_url" alt="Pokemon Image" class="pokemon-image" />
      </div>
    </div>
  </RouterLink>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Oswald&display=swap');

.entry-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}

.entry-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}

.name {
  font-weight: bold;
}

.type-container {
  display: flex;
  margin-top: 10px;
}

.type-box {
  margin-right: 5px;
  padding: 5px;
  border: 1px solid #39495c;
  border-radius: 5px;
}

.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
}

.pokemon-image {
  max-width: 100%;
  height: auto;
}
</style>
