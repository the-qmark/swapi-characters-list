<template>
  <div class="search-input">
    <input
      type="text"
      placeholder="Введите имя персонажа"
      v-model="search"
    />
    <div
      class="suggestions-list"
      v-if="showSugg"
    >
      <app-loader v-if="isLoading" />
      <template v-else-if="arr.length > 0">
        <router-link
          v-for="char in arr"
          :key="char.name"
          :to="getCharacterPath(char)"
        >
          <div class="suggestions-list__item">
            {{ char.name }}
          </div>
        </router-link>
      </template>
      <template v-else> НИЧЕГО НЕ НАЙДЕНО</template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { loadCharactersBySearch } from "@/api/index";
import debounce from "@/helpers/debounce";
import { TCharacter } from "@/types/character";
import appLoader from "./app-loader.vue";
const search = ref("");
const isLoading = ref(false);
const arr = ref<TCharacter[]>([]);

const getCharacterId = (character: TCharacter) => {
  const url = character.url;
  const id = url.split("/");
  console.log(id);
  return id[id.length - 2];
};

const getCharacterPath = (character: TCharacter) => {
  const id = getCharacterId(character);
  return `/characters/${id}`;
};

const onSearch = debounce(() => {
  isLoading.value = true;
  loadCharactersBySearch(search.value)
    .then((data) => {
      arr.value = data.data.results;
      isLoading.value = false;
    })
    .catch((e) => {
      console.log(e);
    });
});

const showSugg = computed(() => {
  return isLoading.value || search.value;
});

watch(search, (newSearch) => {
  if (newSearch != "") onSearch();
});
</script>

<style scoped>
.search-input {
  position: relative;
  width: 500px;
}

input {
  width: 500px;
}

ul {
  margin: 0;
}
.suggestions-list {
  position: absolute;
  top: 30px;
  left: 0;
  right: 0;
  background: #fff;
  box-shadow: 4px 4px 8px 0px #000;
  border: 1px solid #000;
}

.suggestions-list__item {
  padding: 5px;
}

a:nth-child(even) {
  background-color: #dddddd;
}
</style>
