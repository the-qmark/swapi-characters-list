<template>
  <div class="numeric-pagination">
    <span>Страницы: </span>
    <button
      v-for="(page, index) in totalPages"
      @click="changePage(page)"
      :key="index"
      :disabled="currentPage == page"
    >
      {{ page }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, computed } from "vue";

const props = defineProps({
  totalItems: {
    type: Number,
    default: 0,
  },
  perPage: {
    type: Number,
    default: 10,
    validator(value: number) {
      return value > 0;
    },
  },
  currentPage: {
    type: Number,
    default: 1,
  },
});

const emits = defineEmits(["change-page"]);

const changePage = (page: number) => {
  emits("change-page", page);
};

const totalPages = computed(() => {
  return Math.ceil(props.totalItems / props.perPage);
});
</script>

<style scoped>
.numeric-pagination {
  margin-top: 15px;
  display: flex;
  align-items: center;
  gap: 15px;
}

button {
  font-size: 15px;
}
</style>
