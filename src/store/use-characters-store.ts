import { defineStore } from "pinia";
import { ref } from "vue";
import { TCharacter } from "@/types/character";
import { loadAllCharacters } from "@/api/index";

export const useCharactersStore = defineStore("characters", () => {
  const charactersList = ref<TCharacter[]>([]);
  const charactersCount = ref(0);
  const isLoading = ref(false);
  const currentPage = ref(1);

  const loadCharactersData = async (page = 1) => {
    isLoading.value = true;
    currentPage.value = page;

    try {
      const { data } = await loadAllCharacters(page);
      charactersList.value = [...data.results];
      charactersCount.value = data.count;
    } catch (error) {
      console.log(error);
    }

    isLoading.value = false;
  };

  return {
    charactersList,
    charactersCount,
    isLoading,
    currentPage,
    loadCharactersData,
  };
});
