<template>
  <v-card
    class="mx-auto my-8"
    elevation="16"
    max-width="300"
    width="300"
    @click="clickCard">
    <v-card-item>
      <v-img height="200" :src="srcImage"></v-img>
      <v-card-title> {{ name }}</v-card-title>

      <v-card-subtitle>Types: {{ types }} </v-card-subtitle>
      <v-card-subtitle>Abilities: {{ abilities }} </v-card-subtitle>
      <v-divider></v-divider>
    </v-card-item>

    <v-card-text>
      Stats:
      <div class="d-flex" v-for="stat in stats">
        <span class="flex-fill pa-1"> {{ stat.stat.name }}</span>
        <span class="pa-1 text-right"> {{ stat.base_stat }}</span>
      </div>
    </v-card-text>
  </v-card>
</template>

<script lang="ts" setup>
import { useRoute } from "vue-router";
const route = useRoute();
const props = defineProps<{
  card: ExternalParameter;
}>();

const { data: pokemon, error } = useFetch<Pokemon>(props.card.url);

const name = computed(() => {
  return pokemon.value?.name;
});

const types = computed(() => {
  const arrTypes = pokemon.value?.types || [];
  return arrTypes.map((type) => type.type.name).join(", ");
});

const srcImage = computed(() => {
  const arrSprites = pokemon.value?.sprites || [];
  return arrSprites["front_default"];
});

const abilities = computed(() => {
  const arrAbilities = pokemon.value?.abilities || [];
  return arrAbilities.map((ability) => ability.ability.name).join(", ");
});

const stats = computed(() => {
  return pokemon.value?.stats;
});

const clickCard = () => {
  navigateTo({
    path: `pokemon/${pokemon.value?.id}`,
  });
};
</script>

<style scoped></style>
