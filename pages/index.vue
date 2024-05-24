<template>
  <div class="store mx-auto">
    <v-sheet class="d-flex flex-wrap">
      <CardPreview v-for="card in cards" :card="card" />
    </v-sheet>
  </div>
</template>

<script lang="ts" setup>
const { data } = useFetch<PokemonPagination>(
  "https://pokeapi.co/api/v2/pokemon/"
);

const cards = computed(() => {
  return data.value?.results;
});
</script>

<style scoped>
.store {
  width: 80%;
}
</style>
