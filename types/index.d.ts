declare interface PokemonPagination {
  count: number;
  next?: string;
  previous?: string;
  results: ExternalParameter[];
}

declare interface Stat {
  name: string;
  url: string;
}

declare interface Ability {
  name: string;
  url: string;
}

declare interface Type {
  name: string;
  url: string;
}

declare interface PokemonStats {
  base_stat: number;
  effort: number;
  stat: Stat;
}

declare interface PokemonAbilities {
  ability: Ability;
  is_hidden: boolean;
  slot: number;
}

declare interface PokemonTypes {
  type: Type;
  slot: number;
}

declare interface Pokemon {
  name: string;
  id: number;
  types: PokemonTypes[];
  sprites: any;
  abilities: PokemonAbilities[];
  stats: PokemonStats[];
  game_indices: [];
  species: ExternalParameter;
}

declare interface PokemonEvolution {
  evolution_details: [];
  evolves_to: PokemonEvolution[];
  is_baby: boolean;
  species: any;
}

declare interface PokemonEvolutionChain {
  baby_trigger_item: any;
  chain: PokemonEvolution;
  id: number;
}

declare interface ExternalParameter {
  name?: string;
  url: string;
}

declare interface PokemonSpecies {
  evolution_chain: ExternalParameter;
}
