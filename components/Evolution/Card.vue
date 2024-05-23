<template>
  <v-card>
    <v-card-item>
      <v-img min-width="150" :src="srcImage"></v-img>
      <v-divider></v-divider>
      <v-card-title class="text-center"> {{ props.pokemonName }}</v-card-title>
    </v-card-item>
  </v-card>
</template>

<script lang="ts" setup>
const props = defineProps<{
  pokemonName: String;
}>();

const { data, error } = await useFetch(
  `https://pokeapi.co/api/v2/pokemon/${props.pokemonName}`
);

const srcImage = computed(() => {
  const arrSprites = data.value.sprites || [];
  return arrSprites["front_default"];
});
</script>

<style scoped></style>
