declare interface Stat {
  name: String;
  url: String;
}

declare interface Ability {
  name: String;
  url: String;
}

declare interface Type {
  name: String;
  url: String;
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
  name: String;
  id: number;
  types: PokemonTypes[];
  sprites: any;
  abilities: PokemonAbilities[];
  stats: PokemonStats[];
  game_indices: [];
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
  name: String;
  url: String;
}
