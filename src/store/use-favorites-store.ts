import { defineStore } from "pinia";
import { ref } from "vue";
import { TCharacter } from "@/types/character";

export const useFavoritesStore = defineStore("favorites", () => {
  const favoritesList = ref<TCharacter[]>([]);

  const addToFavorites = (character: TCharacter) => {
    favoritesList.value.push(character);
  };

  const removeFromFavorites = (character: TCharacter) => {
    favoritesList.value = favoritesList.value.filter(
      (c) => c.name != character.name
    );
  };

  const changeFavoriteState = (character: TCharacter) => {
    if (checkIsFavorite(character)) {
      removeFromFavorites(character);
    } else {
      addToFavorites(character);
    }
  };

  const checkIsFavorite = (character: TCharacter) => {
    return !!favoritesList.value.find((c) => c?.name == character?.name);
  };

  return {
    favoritesList,
    changeFavoriteState,
    checkIsFavorite,
  };
});
