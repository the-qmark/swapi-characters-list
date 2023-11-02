<template>
  <div class="characters-list">
    <input-autocomplite />
    <app-table-horizontal
      title="СПИСОК ПЕРСОНАЖЕЙ"
      :is-loading="isLoading"
      :headers="tableHeaders"
      :items="charactersList"
      @action-click="onActionClick"
    />

    <numeric-pagination
      :totalItems="charactersCount"
      :current-page="currentPage"
      @change-page="onPageChanged"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import { storeToRefs } from "pinia";
import { TCharacter } from "@/types/character";
import { useCharactersStore, useFavoritesStore } from "@/store";
import AppTableHorizontal from "@/components/app-table/app-table-horizontal.vue";
import NumericPagination from "@/components/ui/numeric-pagination.vue";
import InputAutocomplite from "@/components/ui/input-autocomplite.vue";

const charactersStore = useCharactersStore();
const { charactersList, charactersCount, isLoading, currentPage } =
  storeToRefs(charactersStore);
const { loadCharactersData } = charactersStore;

const favoritesStore = useFavoritesStore();
const { changeFavoriteState } = favoritesStore;

const tableHeaders = ref(["Имя", "Рост", "Масса", "Цвет волос", "Действие"]);

onMounted(async () => {
  if (charactersList.value?.length == 0) {
    await loadCharactersData(currentPage.value);
  }
});

const onPageChanged = (page: number) => {
  currentPage.value = page;
};

const onActionClick = (item: TCharacter) => {
  changeFavoriteState(item);
};

watch(currentPage, (newPage) => {
  loadCharactersData(newPage);
});
</script>
