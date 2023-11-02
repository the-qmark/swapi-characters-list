<template>
  <div>
    <app-loader v-if="!character" />
    <app-table-vertical
      v-else
      :title="character?.name"
      :is-loading="false"
      :item="character"
      @action-click="onActionClick"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { loadCharacterById } from "@/api/index";
import { TCharacter } from "@/types/character";
import { useFavoritesStore } from "@/store";
import AppTableVertical from "@/components/app-table/app-table-vertical.vue";
import AppLoader from "@/components/ui/app-loader.vue";

const route = useRoute();
const character = ref<TCharacter>();

const favoritesStore = useFavoritesStore();
const { changeFavoriteState } = favoritesStore;

onMounted(() => {
  loadCharacterById(id.value).then((data) => {
    console.log(data.data);
    character.value = data.data;
  });
});

const id = computed((): string => route.params.id as string);

const onActionClick = (item: TCharacter) => {
  changeFavoriteState(item);
};
</script>
