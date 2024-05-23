<template>
  <div class="store mx-auto">
    <v-sheet class="d-flex flex-wrap">
      <CardPreview v-for="card in cards" :card="card" />
    </v-sheet>
  </div>
</template>

<script lang="ts" setup>
let cards = ref<{}>(0);

const { data } = await useFetch("https://pokeapi.co/api/v2/pokemon/");

onMounted(async () => {
  await fetch("https://pokeapi.co/api/v2/pokemon/", {
    method: "GET", //optional
  })
    .then(async (response) => {
      const data = await response.json();
      console.log("data", data);
      cards.value = data.results;
      // return data.results;
    })
    .catch((error) => {
      return error;
    });
});
</script>

<style scoped>
.store {
  width: 80%;
}
</style>
