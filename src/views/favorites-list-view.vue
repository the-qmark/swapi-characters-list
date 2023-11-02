<template>
  <div class="favorites-list">
    <app-table-horizontal
      title="ИЗБРАННОЕ"
      :headers="tableHeaders"
      :items="favoritesList"
      @action-click="onActionClick"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import { storeToRefs } from "pinia";
import { TCharacter } from "@/types/character";
import { useCharactersStore, useFavoritesStore } from "@/store";
import AppTableHorizontal from "@/components/app-table/app-table-horizontal.vue";

const charactersStore = useCharactersStore();
const { charactersList, currentPage } = storeToRefs(charactersStore);
const { loadCharactersData } = charactersStore;

const favoritesStore = useFavoritesStore();
const { favoritesList } = storeToRefs(favoritesStore);
const { changeFavoriteState } = favoritesStore;

const tableHeaders = ref(["Имя", "Рост", "Масса", "Цвет волос", "Действие"]);

onMounted(() => {
  if (charactersList.value?.length == 0) {
    loadCharactersData(currentPage.value);
  }
});

const onActionClick = (item: TCharacter) => {
  changeFavoriteState(item);
};

watch(currentPage, (newPage) => {
  loadCharactersData(newPage);
});
</script>
