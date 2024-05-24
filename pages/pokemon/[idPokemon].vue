<template>
  <v-container class="">
    <v-card class="pa-4">
      <v-container class="d-flex flex-row mb-6">
        <div class="ma-2 pa-2">
          <v-img
            class="ma-6"
            :width="300"
            aspect-ratio="4/3"
            cover
            :src="srcImage"></v-img>
        </div>
        <v-container class="ma-2 pa-2">
          <div :class="['text-h2', 'pa-2']">{{ name }}</div>
          <v-container>
            <v-chip v-for="ability in abilities">
              {{ ability.ability.name }}
            </v-chip>
          </v-container>
          <v-container>
            <div class="v-row" v-for="stat in stats">
              <span class="v-col pa-0"> {{ stat.stat.name }}</span>
              <span class="v-col pa-0"> {{ stat.base_stat }}</span>
            </div>
          </v-container>
        </v-container>
      </v-container>

      <v-divider></v-divider>
      <Evolution :evolution-chain="species.evolution_chain"></Evolution>
    </v-card>
  </v-container>
</template>

<script lang="ts" setup>
import { useRoute } from "vue-router";
const route = useRoute();

const { data: pokemon } = await useFetch(
  `https://pokeapi.co/api/v2/pokemon/${route.params.idPokemon}`
);

const { data: species } = await useFetch(pokemon.value.species.url);

const name = computed<String>(() => {
  const _name = pokemon.value.name;
  return _name && _name[0].toUpperCase() + _name.slice(1);
});

// const pokemonId = computed<number>(() => {
//   return parseInt(route.params.idPokemon.toString());
// });

const types = computed(() => {
  const arrTypes = pokemon.value.types || [];
  return arrTypes.map((type) => type.type.name).join(", ");
});

const srcImage = computed(() => {
  const arrSprites = pokemon.value.sprites || [];
  return arrSprites["front_default"];
});

const abilities = computed(() => {
  return pokemon.value.abilities;
});

const stats = computed(() => {
  return pokemon.value.stats;
});

// const species = computed(() => {
//   return pokemon.value.species;
// });

// const evolutionChain = computed(async () => {
//   const { data } = await useFetch(species.value.url);
//   return await data;
// });

// const { data: species } = await useFetch(await pokemon.value.species.url);
// console.log("Species", species.value);
// const { data: species } = await useFetch(pokemon.value.species.url);
</script>

<style scoped></style>
