<template>
  <tr>
    <td>{{ item?.name }}</td>
    <td>{{ item?.height }}</td>
    <td>{{ item?.mass }}</td>
    <td>{{ item?.hair_color }}</td>

    <td>
      <button @click="actionClick(item)">{{ btnText }}</button>
    </td>
  </tr>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, PropType, computed } from "vue";
import { useFavoritesStore } from "@/store";
import { TCharacter } from "@/types/character";

const props = defineProps({
  item: {
    type: Object as PropType<TCharacter>,
    required: true,
  },
});

const emits = defineEmits(["action"]);

const { checkIsFavorite } = useFavoritesStore();

const actionClick = (item: TCharacter | undefined) => {
  emits("action", item);
};

const isFavorite = computed(() => {
  return checkIsFavorite(props.item);
});

const btnText = computed(() => {
  return isFavorite.value ? "Удалить из избранного" : "Добавить в избранное";
});
</script>
