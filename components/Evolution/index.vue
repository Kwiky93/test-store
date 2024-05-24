<template>
  <v-container class="pa-4">
    <!-- <div>Test {{ props.pokemonId }}</div> -->
    <div :class="['text-h4', 'pa-2']">Evolution</div>
    <v-sheet class="d-flex flex-wrap justify-center">
      <div v-for="(item, index) in arrEvolution" class="d-flex">
        <EvolutionCard class="ma-4" :pokemonName="item.name" />
        <div class="align-content-center">
          <MdiIcon
            defaultSize="2"
            class="icon"
            v-if="index < arrEvolution.length - 1"
            icon="mdiArrowRightBold" />
        </div>
      </div>
    </v-sheet>
  </v-container>
</template>

<script lang="ts" setup>
const props = defineProps<{
  evolutionChainUrl: string;
}>();

console.log("EvolutionChain", props.evolutionChainUrl);

const { data: evolution } = useFetch<PokemonEvolutionChain>(
  props.evolutionChainUrl
);

const arrEvolution = computed(() => {
  const _arrEvolution = [];
  let evolutionTo = evolution.value?.chain || null;
  while (evolutionTo !== null) {
    _arrEvolution.push(evolutionTo.species);
    evolutionTo = evolutionTo.evolves_to[0] || null;
  }
  return _arrEvolution;
});
</script>

<style scoped>
.icon {
  width: 24px !important;
  height: 24px !important;
}
</style>
